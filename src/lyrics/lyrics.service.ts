import * as request from "request";
import * as cheerio from "cheerio";
import { Component } from "nest.js";
import { LyricsSearchResult, Lyrics } from "./lyrics.models";

@Component()
export class LyricsService {
    private readonly _accessToken = process.env["GENIUS_ACCESS_TOKEN"] || require("../../env.json").GENIUS_ACCESS_TOKEN;

    public search(query: string): Promise<LyricsSearchResult[]> {
        return new Promise((resolve, reject) => {
            request.get(`https://api.genius.com/search?q=${query}`, {
                "auth": {
                    "bearer": this._accessToken
                }
            }, (error, response) => {
                if (error) {
                    reject(error);
                } else {
                    let responseData = JSON.parse(response.body).response.hits.map(h => ({
                        url: h.result.url,
                        title: h.result.title,
                        artist: h.result.primary_artist.name
                    } as LyricsSearchResult));

                    resolve(responseData as LyricsSearchResult[]);
                }
            });
        })
    }

    public get(url: string): Promise<Lyrics> {
        return new Promise((resolve, reject) => {
            request(url, function(error, response, body){
                if (error) {
                    reject(error);
                } else {
                    let $ = cheerio.load(body);
                    resolve({
                        artist: $(".song_header-primary_info-primary_artist").text().trim(),
                        name: $("h1").text().trim(),
                        contentText: $(".lyrics").text().trim()
                    } as Lyrics)
                }
            });
        })
    }
}
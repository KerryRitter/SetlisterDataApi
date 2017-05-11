import * as ugs from "ultimate-guitar-scraper";
import axios, { AxiosRequestConfig } from "axios";
import { Component } from "nest.js";

@Component()
export class LyricsService {
    private readonly _accessToken = process.env["GENIUS_ACCESS_TOKEN"] || require("../../env.json").GENIUS_ACCESS_TOKEN;

    public search(query: string) {
        let x = require("../../env.json").GENIUS_ACCESS_TOKEN;
        console.log(x, this._accessToken);
        axios.defaults.headers.common['Authorization'] = this._accessToken;

        return axios.get(`https://api.genius.com/search?q=${query}`);
    }
}
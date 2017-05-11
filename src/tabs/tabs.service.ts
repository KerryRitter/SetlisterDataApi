import * as ugs from "ultimate-guitar-scraper";
import { TabSearchResult, Tab, TabsSearchQuery } from "./tabs.models";
import { Component } from "nest.js";

@Component()
export class TabsService {
    public search(bandName: string, songName: string): Promise<TabSearchResult[]> {
        return new Promise((resolve, reject) => {
            ugs.search({
                bandName, 
                songName,
                type: ["tabs", "chords", "bass tabs"]
            }, (error, tabs: TabSearchResult[]) => {
                if (error) {
                    console.error("search err", error);
                    reject(error);
                } else {
                    resolve(tabs);
                }
            })
        });
    }

    public getTab(tabUrl: string): Promise<Tab> {
        return new Promise((resolve, reject) => {
            ugs.get(tabUrl, (error, tab: Tab) => {
                if (error) {
                    console.error("getTab err", error);
                    reject(error);
                } else {
                    resolve(tab);
                }
            })
        })
    }
}
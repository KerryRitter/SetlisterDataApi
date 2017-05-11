import * as express from "express";
import { TabsSearchQuery } from "./tabs.models";
import { TabsService } from "./tabs.service";
import { Controller, Response, Get, Query, HttpStatus } from "nest.js";


@Controller("tabs")
export class TabsController {
    public constructor(private _tabsService: TabsService) {
    }

    @Get("/search")
    public search(
        @Response() res: express.Response, 
        @Query("bandName") bandName: string, 
        @Query("songName") songName: string
    ) {
        console.log(bandName, songName);
        this._tabsService.search(bandName, songName)
            .then(searchResults => res.status(HttpStatus.OK).send(searchResults))
            .catch(error => res.status(HttpStatus.BAD_REQUEST).send(error));
    }

    @Get("/item")
    public getTab(
        @Response() res: express.Response, 
        @Query("tabUrl") tabUrl: string
    ) {
        this._tabsService.getTab(tabUrl)
            .then(tab => res.status(HttpStatus.OK).send(tab))
            .catch(error => res.status(HttpStatus.BAD_REQUEST).send(error));
    }
}
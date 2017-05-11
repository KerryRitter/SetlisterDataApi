import * as express from "express";
import { Controller, Response, Get, Query, Param, HttpStatus } from "nest.js";
import { LyricsService } from "./lyrics.service";

@Controller("lyrics")
export class LyricsController {
    public constructor(
        private readonly _lyricsService: LyricsService
    ) {
    }

    @Get("/search")
    public search(
        @Response() res: express.Response,
        @Query("query") query: string
    ) {
        this._lyricsService.search(query)
            .then(response => {
                res.status(HttpStatus.OK).send(response);
            })
            .catch(e => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
            });
    }

    @Get("/item")
    public get(
        @Response() res: express.Response, 
        @Query("url") url: string
    ) {
        this._lyricsService.get(url).then(response => {
                res.status(HttpStatus.OK).send(response);
            })
            .catch(e => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
            });
    }
}
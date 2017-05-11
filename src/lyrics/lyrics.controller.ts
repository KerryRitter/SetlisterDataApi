import * as express from "express";
import { Controller, Response, Get, Query, HttpStatus } from "nest.js";
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
        return this._lyricsService.search(query)
            .then(response => {
                res.status(HttpStatus.OK).send(response.data);
            })
            .catch(e => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
            });
    }
}
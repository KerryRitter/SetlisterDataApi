import { NestFactory, Module, NestModule } from "nest.js";
import { LyricsController } from "./lyrics.controller";
import { LyricsService } from "./lyrics.service";

@Module({
    components: [LyricsService],
    controllers: [LyricsController]
})
export class LyricsModule implements NestModule {
}
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { NestFactory, Module } from "nest.js";
import { TabsModule } from "./tabs/tabs.module";
import { LyricsModule } from "./lyrics/lyrics.module";

@Module({
    modules: [TabsModule, LyricsModule] as any
})
class ApplicationModule {

}

const server = express();
server.use(bodyParser.json());
server.use(cors());

const app = NestFactory.create(ApplicationModule, server);
const port = process.env.PORT || 3000;
app.listen(port as any, () => console.log(`Application is listening on port ${port}.`));
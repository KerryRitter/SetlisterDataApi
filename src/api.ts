import { NestFactory, Module } from "nest.js";
import { TabsModule } from "./tabs/tabs.module";
import { LyricsModule } from "./lyrics/lyrics.module";

@Module({
    modules: [TabsModule, LyricsModule]
})
class ApplicationModule {

}

const app = NestFactory.create(ApplicationModule);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application is listening on port ${port}.`));
import { NestFactory, Module } from "nest.js";
import { TabsModule } from "./tabs/tabs.module";
import { LyricsModule } from "./lyrics/lyrics.module";

@Module({
    modules: [TabsModule, LyricsModule]
})
class ApplicationModule {

}

const app = NestFactory.create(ApplicationModule);
app.listen(3000, () => console.log('Application is listening on port 3000.'));
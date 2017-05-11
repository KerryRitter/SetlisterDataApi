import { NestFactory, Module } from "nest.js";
import { TabsModule } from "./tabs/tabs.module";

@Module({
    modules: [TabsModule]
})
class ApplicationModule {

}

const app = NestFactory.create(ApplicationModule);
app.listen(3000, () => console.log('Application is listening on port 3000.'));
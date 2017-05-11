import { NestFactory, Module } from "nest.js";
import { TabsService } from "./tabs.service";
import { TabsController } from "./tabs.controller";

@Module({
    components: [TabsService],
    controllers: [TabsController]
})
export class TabsModule {
}
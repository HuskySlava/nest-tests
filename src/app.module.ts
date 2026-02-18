import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PotatoController } from './potato/potato.controller';

@Module({
	imports: [],
	controllers: [AppController, PotatoController],
	providers: [AppService],
})
export class AppModule {}

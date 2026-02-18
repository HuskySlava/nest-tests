import { Controller, Get, Header, Req } from "@nestjs/common";

@Controller('potato')
export class PotatoController {

	@Get()
	getPotato(): string {
		return "potato";
	}

	@Get("inside-potato")
	getInsidePotato(): string {
		return "inside potato";
	}

	@Get("echo")
	@Header('Content-Type', 'application/json')
	getEcho(@Req() req: Request) {
		console.log(req);
		return JSON.stringify({
			"a": "John Doe",
			"bNum": 30,
			"isC": false,
			"skills": ["JavaScript", "Python", "SQL"],
			"address": {
				"street": "Potato street",
				"city": "New Potato",
				"zipCode": "123456"
			}
		})
	}
}

import { Test, TestingModule } from '@nestjs/testing';
import { PotatoController } from './potato.controller';

describe('PotatoController', () => {
  let controller: PotatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotatoController],
    }).compile();

    controller = module.get<PotatoController>(PotatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

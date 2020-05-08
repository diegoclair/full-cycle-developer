import { Test, TestingModule } from '@nestjs/testing';
import { MaratonaService } from './maratona.service';

describe('MaratonaService', () => {
  let service: MaratonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaratonaService],
    }).compile();

    service = module.get<MaratonaService>(MaratonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

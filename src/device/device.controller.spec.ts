import { Test, TestingModule } from '@nestjs/testing';
import { DeviceController } from './device.controller';
import { DataBaseDeviceService } from './database-device.service';

describe('DeviceController', () => {
  let controller: DeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceController],
      providers: [DataBaseDeviceService],
    }).compile();

    controller = module.get<DeviceController>(DeviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

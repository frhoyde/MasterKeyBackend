import { Module } from '@nestjs/common';

import * as providers from './providers';

const services = Object.values(providers);

@Module({
  providers: [...services],
  exports: [...services],
})
export class CommonModule {}

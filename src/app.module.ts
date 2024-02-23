import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdenCompraModule } from './orden-compra/orden-compra.module';

@Module({
  imports: [OrdenCompraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

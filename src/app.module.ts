import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdenCompraModule } from './orden-compra/orden-compra.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [OrdenCompraModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

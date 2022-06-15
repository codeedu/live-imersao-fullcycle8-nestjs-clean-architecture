import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RouteSchema } from './@core/infra/db/typeorm/route.schema';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, 'database.sqlite'),
      synchronize: true,
      logging: true,
      entities: [RouteSchema],
    }),
    RoutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

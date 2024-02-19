import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        // host: configService.get('MYSQL_HOST'),
        // port: configService.get('MYSQL_PORT'),
        // database: configService.getOrThrow('MYSQL_DATABASE'),
        // username: configService.getOrThrow('MYSQL_USERNAME'),
        // password: configService.getOrThrow('MYSQL_PASSWORD'),
        url: configService.getOrThrow('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}

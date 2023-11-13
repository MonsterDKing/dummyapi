import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WebhookController } from './webhook/webhook.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, WebhookController],
  providers: [AppService],
})
export class AppModule {}

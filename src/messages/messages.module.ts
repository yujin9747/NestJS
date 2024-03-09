import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { Service } from './messages.service.interface';
import { MessagesRepository } from './messages.repository';
import { Repository } from './messages.repository.interface';

@Module({
  controllers: [MessagesController],
  providers: [
    {
      provide: Service,
      useClass: MessagesService,
    },
    {
      provide: Repository,
      useClass: MessagesRepository,
    },
  ],
})
export class MessagesModule {}

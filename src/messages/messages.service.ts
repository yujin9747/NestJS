import { Repository } from './messages.repository.interface';
import { Service } from './messages.service.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService implements Service {
  constructor(@Inject(Repository) public messagesRepo: Repository) {}

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async create(content: string) {
    return await this.messagesRepo.create(content);
  }
}

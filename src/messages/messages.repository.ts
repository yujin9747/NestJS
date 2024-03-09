import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';
import { Repository } from './messages.repository.interface';

@Injectable()
export class MessagesRepository implements Repository {
  async findOne(id: string) {
    const messages = await this.findAllHelper();
    return messages[id];
  }

  async findAll() {
    return await this.findAllHelper();
  }

  async create(content: string) {
    const messages = await this.findAllHelper();
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await this.writeToJson(JSON.stringify(messages));
  }

  private async findAllHelper() {
    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }

  private async writeToJson(messages: string) {
    await writeFile('messages.json', messages);
  }
}

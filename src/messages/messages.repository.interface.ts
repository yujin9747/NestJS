export interface Repository {
  findAll(): Promise<any>;
  findOne(id: string): Promise<any>;
  create(content: string): void;
}

export const Repository = Symbol('Repository');

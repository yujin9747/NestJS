export interface Service {
  findAll(): Promise<any>;
  findOne(id: string): Promise<any>;
  create(content: string): void;
}

export const Service = Symbol('Service')

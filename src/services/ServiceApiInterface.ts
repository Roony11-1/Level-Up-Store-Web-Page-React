export interface ServiceApiInterface<T> 
{
  fetchAll(): Promise<T[]>;
  fetchById(id: number): Promise<T | null>;
  save(entity: T): Promise<boolean>;
}
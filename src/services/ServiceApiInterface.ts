export interface ServiceApiInterface<T> 
{
  fetchAll(): Promise<T[]>;
  fetchById(id: number): Promise<T | null>;
  save(entity: T): Promise<{ success: boolean; message: string }> ;
  deleteById(id: number): Promise<boolean>;
}
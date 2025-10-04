export interface RepositoryInterface<T>
{
    findAll(): T[];
    findById(id: any): T | null;
    save(entity: T): boolean;
}
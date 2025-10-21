export class Response<T>
{
    private success: boolean;
    private message: string;
    private entity?: T;

    constructor(success: boolean, message: string, entity?: T)
    {
        this.success = success;
        this.message = message;
        this.entity = entity;
    }

    public isSuccess(): boolean { return this.success; }
    public getMessage(): string { return this.message }
    public getEntity(): T | undefined { return this.entity; } 
}
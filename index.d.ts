export interface RedisClientOptions{
    url?: string;
    username?: string;
    password?: string;
    name?: string;
    database?: number;
    commandsQueueMaxLength?: number;
    readonly?: boolean;
    legacyMode?: boolean;
}

export interface TableOptions extends RedisClientOptions{
tableName?: string;
}
declare module "quickredis-db"
export class RedisClient{
    public constructor(options: RedisClientOptions)
    public set(key: String, value: String | Number): void
    public get(key: String): Promise<String | Number>
    public add(key: String, value:  Number): void
    public subtract(key: String, value:  Number): void
    public deleteAll(): void
    public delete(key: String | Number): void
    public disconnect(): Promise<void> 
    public ping(): Number<String | Number>
    public has(key: String): Boolean
}
export class Table{
    public constructor(options: TableOptions)
    public set(key: String, value: String | Number): void
    public get(key: String): Promise<String | Number>
    public add(key: String, value:  Number): void
    public subtract(key: String, value:  Number): void
    public delete(key: String | Number): void
    public disconnect(): Promise<void> 
    public ping(): Number<String | Number>
    public has(key: String): Boolean
    public tableName: String
}

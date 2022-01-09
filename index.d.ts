declare module "quick.redis"
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
export class RedisClient{
    public constructor(options: RedisClientOptions)
    public set(key: String, value: String | Number): void
    public get(key: String): Promise<String | Number>
    public add(key: String, value:  Number): void
    public subtract(key: String, value:  Number): void
    public delete(key: String)
    public disconnect(): Promise<void>  
}

const { options: option } = require('./RedisClient')
const redis = require('redis')
class Table {
    constructor(options = option){
   // if(options.url != undefined || options.username != undefined && options.password != undefined){

     //   this.client = redis.createClient(option)

    //}else{

        this.client = redis.createClient(options)

   // }
    if(options.tableName == undefined) throw new Error("Table Name Missing in Options: {tableName: \"TheName\"} in options of Table Constructor")
    this.tableName = options.tableName

    connect(this.client)

    this.client.on("error" , err => { throw new Error(err) })
    
}

async set(key, value){

    await this.client.set(`RedisTable_${this.tableName}_`+key, value)

}

async get(key){

    const fetched = await this.client.get(`RedisTable_${this.tableName}_`+key) 

    return fetched
}

async add(key, value = 0) {

    let Number = parseInt(value)

    if(isNaN(Number)){

        throw new Error('Value Must Be A Number')

    }
    
    this.client.get(`RedisTable_${this.tableName}_`+key).then(r => {

        let final = parseInt(r)

        if(isNaN(final)) final = 0

        this.client.set(`RedisTable_${this.tableName}_`+key , Number + final)

    })

}

async subtract(key , value){
    let Number = parseInt(value)

    if(isNaN(Number)){

        throw new Error('Value Must Be A Number')

    }
    
    this.client.get(`RedisTable_${this.tableName}_`+key).then(r => {

        let final = parseInt(r)

        if(isNaN(final)) final = 0

        this.client.set(`RedisTable_${this.tableName}_`+key , final - Number)


    })

}

async delete(key){

    await this.client.del(`RedisTable_${this.tableName}_`+key)
}

async disconnect(){

    await this.client.disconnect()
    
}

async ping(){

    return await this.client.PING() || this.client.ping()

}

async renameKey(key, newNameOfKey){

    await this.client.rename(`RedisTable_${this.tableName}_`+key, `RedisTable_${this.tableName}_`+newNameOfKey)

}

async has(key){

    await this.client.get(`RedisTable_${this.tableName}_`+key).then(r =>{
        if(r !== undefined) return true
        else return false
    })
}


}

async function connect(client = redis.createClient()){

    return await client.connect()

}

module.exports = Table

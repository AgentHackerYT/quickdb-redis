const redis = require("redis")
class RedisClient {
    constructor(options){

    this.client = redis.createClient(options)
    
    connect(this.client)

    this.client.on("error" , err => { throw new Error(err) })
    
    module.exports = {
        options
    }
}

async set(key, value){

    await this.client.set(key, value)

}

async get(key){

    const fetched = await this.client.get(key) 

    return fetched
}

async add(key, value = 0) {

    let Number = parseInt(value)

    if(isNaN(Number)){

        throw new Error('Value Must Be A Number')

    }
    
    this.client.get(key).then(r => {

        let final = parseInt(r)

        if(isNaN(final)) final = 0

        this.client.set(key , Number + final)

    })

}

async subtract(key , value){
    let Number = parseInt(value)

    if(isNaN(Number)){

        throw new Error('Value Must Be A Number')

    }
    
    this.client.get(key).then(r => {

        let final = parseInt(r)

        if(isNaN(final)) final = 0

        this.client.set(key , final - Number)


    })

}

async deleteAll(){

    await this.client.flushAll()

}

async delete(key){

    await this.client.del(key)
}

async disconnect(){

    await this.client.disconnect()
    
}

async ping(){

    return await this.client.PING() || this.client.ping()

}

async renameKey(key, newNameOfKey){

    await this.client.rename(key, newNameOfKey)

}

async has(key){

    await this.client.get(key).then(r =>{
        if(r !== undefined) return true
        else return false
    })
}


}

async function connect(client = redis.createClient()){

    return await client.connect()

}

module.exports = RedisClient 

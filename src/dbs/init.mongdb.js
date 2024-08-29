'use-strict'

const mongoose = require('mongoose')

const connectString = `mongodb://localhost:27017/shopDEV`


class Database {
    constructor(){
        this.connect()
    }
    connect(type = 'mongodb') {
        if(1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }
        mongoose.connect( connectString ).then( _ => console.log(`Connect mongodb Sucess`)).catch( err => console.log(`error`))
    }
    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
}
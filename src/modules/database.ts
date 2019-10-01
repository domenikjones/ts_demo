import * as mongoose from 'mongoose'
import * as models from '../models/index'

class Database {
  public connection: mongoose.Connection
  public models: {
    [modelName: string]: mongoose.Model<mongoose.Document>
  } = {}

  constructor() {
    console.log('load database.module')
    this.connection = mongoose.createConnection('mongodb://localhost:27017')
    // set models array from classes
    Object.keys(models).forEach(modelName => {
      this.models[modelName] = this.connection.model(
        modelName,
        (<any>models)[modelName]
      )
    })
  }
}

export const Db = new Database()

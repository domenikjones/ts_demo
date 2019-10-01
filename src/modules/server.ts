const express = require('express')

class Server {
  express: any

  constructor() {
    console.log('load module server')
    this.createExpress()
  }

  createExpress() {
    console.log('createExpress')
    this.express = express()
    this.express.listen(3000)

    // test view
    this.express.get('/test/', (req: any, res: any) => {
      res.send('Hello world!')
    })
  }

  test(message: string = 'you are an idiot'): void {
    console.log('test log: ', message)
  }
}

export const ServerInstance = new Server()

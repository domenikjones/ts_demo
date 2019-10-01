import { ServerInstance } from './server'

class Foo {
  constructor() {
    this.addRoutes()
  }

  addRoutes() {
    ServerInstance.express.get('/anne/', (req: any, res: any) => {
      res.send('Hello Anne!')
    })
  }
}

export const FooInstance = new Foo()

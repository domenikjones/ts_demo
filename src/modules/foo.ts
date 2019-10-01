import { ServerInstance } from './server'
import { Db } from './database'

class Foo {
  constructor() {
    this.addRoutes()
  }

  addRoutes() {
    ServerInstance.express.get('/users/', async (req: any, res: any) => {
      console.log('anne')
      let users = await Db.models.User.find()
      res.send(users)
      return
    })

    ServerInstance.express.get('/users/:name', async (req: any, res: any) => {
      let user = await Db.models.User.findOne({ name: req.params.name })
      if (!user) {
        user = new Db.models.User({
          name: req.params.name
        })
        await user.save()
        res.send(user)
        return
      }
      res.send(user)
      return
    })
  }
}

export const FooInstance = new Foo()

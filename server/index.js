const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8089
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const mongoose = require('mongoose')

const db = mongoose.connect(
  `mongodb://DofusTraining:DofusTraining@cluster0-shard-00-00.n58hl.mongodb.net:27017,cluster0-shard-00-01.n58hl.mongodb.net:27017,cluster0-shard-00-02.n58hl.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-gzfxxm-shard-0&authSource=admin&retryWrites=true&w=majority`,
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
)

nextApp.prepare().then(() => {
  // express code here
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/api/train', require('./routes/index'))
  app.get('*', (req, res) => {
    return handle(req, res) // for all the react stuff
  })
  app.listen(PORT, (err) => {
    if (err) throw err
    console.log('Environment is dev ? ' + dev)
    console.log(
      'ready at https://dofus-training.caprover-root.fol-stories.com',
    )
  })
})

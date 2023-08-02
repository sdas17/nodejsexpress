const express = require('express')
const bodyparser = require('body-parser')

const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  })
  app.post('/',function(req,res){
    const number1 = Number(req.body.demo4);
  const number2 = Number(req.body.demo3);
  console.log(number1,number2);
  let data =number1+number2;
  console.log(data);
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
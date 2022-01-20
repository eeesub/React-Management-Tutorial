const express = require("express")
const bodyParser = require('body-parser');
const { application } = require("express");
const app = express()
const port = process.env.PORT || 5000

const customers = [ 
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '홍길동',
      birthday: '651210',
      gender: '남자',
      job: '대학생'
    }, 
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '임꺽정',
      birthday: '651210',
      gender: '남자',
      job: '대학생'
    }, 
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '저팔계',
      birthday: '651210',
      gender: '남자',
      job: '대학생'
    }, 
  ]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/customers', (req, res) => {
    res.send(customers)
})

app.listen(port, () => console.log(`Listening on port ${port}`) )
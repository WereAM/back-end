const express = require('express')
const app = express()
const port = 3000

// const cats = require ('./routes/cat.routes');
const list = require('./routes/todo.routes');

// Use the router
// app.use('/', cats);
app.use('/', list);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.get('/', (req, res) => {
//     res.send('root')
// })

// app.get('/about', (req, res) => {
//     res.send('about')
// })

// app.get('/random.text', (req, res) => {
//     res.send('random.text')
// })

// app.get('/ab?cd', (req, res) => {
//     res.send('ab?cd')
// })

//   app.get('/ab+cd', (req, res) => {
//     res.send('ab+cd')
//   })

//   app.get('/ab*cd', (req, res) => {
//     res.send('ab*cd')
//   })

//   app.get('/ab(cd)?e', (req, res) => {
//     res.send('ab(cd)?e')
//   })
    
//   app.get(/a/, (req, res) => {
//     res.send('/a/')
//   })
    
//   app.get(/.*fly$/, (req, res) => {
//     res.send('/.*fly$/')
//   })
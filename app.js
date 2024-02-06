const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World! 12'))
app.listen(3000, () => console.log('Server ready'))
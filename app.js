const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World! 12345 clusterIp 2'))
app.listen(5000, () => console.log('Server ready'))
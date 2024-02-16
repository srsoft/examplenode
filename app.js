const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World! 12345 clusterIp 8'))
app.listen(3000, () => console.log('Server ready'))
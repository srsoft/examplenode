const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World! 12345 clusterIp 6'))
app.listen(5000, () => console.log('Server ready'))
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World! 12345 clusterIp'))
app.listen(5000, () => console.log('Server ready'))
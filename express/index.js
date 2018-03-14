const express = require('express')
const bodyParser= require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(`HEADERS: ${JSON.stringify(req.headers)}`);
    console.log(`BODY: ${JSON.stringify(req.body, null, 2)}`);

    res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// TASK: Add serving static file
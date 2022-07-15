const express = require ('express');
const app = express();
const port = 5000;
const Timer=require('./middleware/Timer')
app.use(Timer);
app.use(express.static('public'))

// app.get('/', (req, res)=>res.send('Hello!!!'));
app.listen(5000,(err)=>{err?
    console.log(err):console.log('server running')
    })

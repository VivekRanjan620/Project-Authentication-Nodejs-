let express = require('express');
let mongoose = require('mongoose')
let userRouter = require('../route/routeUser')
mongoose.conncet(' mongodb://127.0.0.1:27017/fsd')
.then(()=>{
   console.log('db');
}).catch((err)=>{
 console.log(err);
});



let app = express();
app.use(express.json())
app.use('/api',userRouter)
// app.get('/',(req,res)=>{
//     res.send('hello')
// })
app.listen(4000,()=>{
    console.log('server start on port no 4000');
})

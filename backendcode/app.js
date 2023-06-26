const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const expenseDetails = require('./routes/addexpense');

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(expenseDetails)

sequelize.sync()
.then(()=>{
    app.listen(3000,()=>{
        console.log('server running on 3000 port');
    })
})
.catch((error)=>{
    console.log('error while connecting to database',error);
})


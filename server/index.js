const express = require('express');
const morgan = require('morgan');
const app = express();


//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/savings', require('./routes/saving.route'));

app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
})
const express = require('express');
const path = require('path');
const app = express();

app.set('port' , process.env.PORT || 8080);


// Settings
app.use(express.static(path.join(__dirname , 'public')));


//Routes
app.use(require('./routes/index'));


app.listen(app.get('port') , () => {
    console.log('server on port' , app.get('port'));
});





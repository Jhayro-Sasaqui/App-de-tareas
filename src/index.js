const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

/*app.get('/', function (req, res) {
    res.send('Hello World! <br><h1><i>here we go again</i></h1>');
  });*/

 //settings
  app.set('port', process.env.PORT || 4000);

  //middleware
   app.use(morgan('dev'));
   app.use(express.json());

//routes
  app.use('/api/tareas', require('./routes/task.routes'));

//static files
  //console.log(__dirname + '/public')
  app.use(express.static(path.join(__dirname, 'public')));


//starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});


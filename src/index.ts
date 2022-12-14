import express from 'express';
import rodsRouter from './routers/RodsRouter';
import * as path from 'path';

// Creates a new Express app instance
const app = express();

// Sets up the view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Frontpage
app.get('/', (req, res) => {
    res.send('Need to do something here.');
});

// Handles /movies routes
app.use('/rods', rodsRouter); 

// Starts the app on port 5000, then calls the callback when 
// the app successfully starts.
app.listen(5000, () => {
    console.log('Listening on port 5000: http://localhost:5000');
});
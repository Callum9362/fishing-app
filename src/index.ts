import express from 'express';
import rodsRouter from './routers/RodsRouter';

// Creates a new Express app instance
const app = express();

// Handles /movies routes
app.use('/rods', rodsRouter); 

// Starts the app on port 5000, then calls the callback when 
// the app successfully starts.
app.listen(5000, () => {
    console.log('Listening on port 5000: http://localhost:5000');
});
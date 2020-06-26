import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import VisitController from './core/Visit/Infrastructure/Controllers/Visit'


const PRODUCTION = process.env.PRODUCTION_SERVER || 'no';
if(PRODUCTION === 'no'){
  dotEnv.config();
}

const PORT = process.env.LISTENING_PORT;

const app = express();
app.use(bodyParser.json());


/*
*
* COLOR ENDPOINTS
*
*/

const visitCtrl = new VisitController();

// List All (with pagination)
app.get('/visit', visitCtrl.list);

// Get by ID
app.get('/visit/:visitId', visitCtrl.getById);

// Create new color
app.post('/visit', visitCtrl.createNewVisit);




// init server...
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

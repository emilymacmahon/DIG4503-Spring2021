import Express from 'express';
const cors = require('cors');
require('dotenv').config();

//using dotenv to save environment variables and stored in a single .env file
//stores configuration

const app = express();
const port= 45030;

app.use(cors());
app.use(express.json());

app.get()

app.listen(port, () => {
    console.log("Server is running");
})
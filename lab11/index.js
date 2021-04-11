import Express from 'express';
import Database from './Database';

const App = Express();
const port = 45030;

//translate request to JSON
App.use(Express.json());


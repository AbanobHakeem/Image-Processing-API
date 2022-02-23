import express from 'express';   
import image from './api/image'
import isQueryValid from '../middlewares/isQueryValid';
const routes = express.Router();

routes.use('/image',isQueryValid,image)
routes.get('/queryErorr', (req, res) => { 
    res.send('Query Erorr try fix it and try again')
});

export default routes;
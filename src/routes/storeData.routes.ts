import express from 'express';
import { addItem, buyItem, getAllItems, getBalance } from '../controller/storeData.controller';

export const storeDataRouter = express.Router()

storeDataRouter.get('/allItems', getAllItems);
storeDataRouter.get('/balance', getBalance);
storeDataRouter.post('/addItem', addItem);
storeDataRouter.put('/buyItem', buyItem);

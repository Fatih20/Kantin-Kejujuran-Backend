import express from 'express';
import { addItem, buyItem, getAllItems, getBalance, incrementBalance } from '../controller/storeData.controller';

export const storeDataRouter = express.Router()

storeDataRouter.get('/allItems', getAllItems);
storeDataRouter.get('/balance', getBalance);
storeDataRouter.post('/addItem', addItem);
storeDataRouter.put('/buyItem', buyItem);
storeDataRouter.put('/balance', incrementBalance);

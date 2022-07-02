import express from 'express';
import { getAllItems, getBalance } from '../controller/storeData.controller';

export const storeDataRouter = express.Router()

storeDataRouter.get('/allItems', getAllItems);
storeDataRouter.get('/balance', getBalance);

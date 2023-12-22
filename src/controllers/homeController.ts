import { Request, Response } from 'express';

import { User } from '../models/Product';
import { sequelize } from '../instaces/mysql';

export const home = async (req: Request, res: Response)=>{
    await User.create({
        name:'leonardo'
    })
    console.log('tudo')
}
// Reference the Request and Response types from express
import { Request, Response } from 'express';

export function index(req: Request, res: Response) {
    res.send('This is my default response..');
}

export function getRodPrice(req: Request, res: Response) {
    const { name, price }= req.query;

    res.send(`The rod is ${name}, price is: ${price}`);
}
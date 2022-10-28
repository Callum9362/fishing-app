// Reference the Request and Response types from express
import { Request, Response } from 'express';

export function index(req: Request, res: Response) {
    res.render('rods/index', { title: 'Rods' });
}

export function getRodPrice(req: Request, res: Response) {

    const { id } = req.params;  // An example of getting a param from the route signature
    const { price } = req.query; // An example of getting a param from the query string

    res.send(`The rod id is ${id}, price is: ${price}`);
}
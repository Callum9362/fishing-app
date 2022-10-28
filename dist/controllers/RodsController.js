"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRodPrice = exports.index = void 0;
function index(req, res) {
    res.render('rods/index', { title: 'Rods' });
}
exports.index = index;
function getRodPrice(req, res) {
    const { id } = req.params; // An example of getting a param from the route signature
    const { price } = req.query; // An example of getting a param from the query string
    res.send(`The rod id is ${id}, price is: ${price}`);
}
exports.getRodPrice = getRodPrice;
//# sourceMappingURL=RodsController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRodPrice = exports.index = void 0;
function index(req, res) {
    res.send('This is my default response..');
}
exports.index = index;
function getRodPrice(req, res) {
    const { name, price } = req.query;
    res.send(`The rod is ${name}, price is: ${price}`);
}
exports.getRodPrice = getRodPrice;
//# sourceMappingURL=RodsController.js.map
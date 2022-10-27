"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWelcome = exports.index = void 0;
function index(req, res) {
    res.send('This is my default response..');
}
exports.index = index;
function getWelcome(req, res) {
    res.send('This is my welcome response...');
}
exports.getWelcome = getWelcome;
//# sourceMappingURL=RodsController.js.map
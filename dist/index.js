"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RodsRouter_1 = __importDefault(require("./routers/RodsRouter"));
// Creates a new Express app instance
const app = (0, express_1.default)();
// Frontpage
app.get('/', (req, res) => {
    res.send('Need to do something here.');
});
// Handles /movies routes
app.use('/rods', RodsRouter_1.default);
// Starts the app on port 5000, then calls the callback when 
// the app successfully starts.
app.listen(5000, () => {
    console.log('Listening on port 5000: http://localhost:5000');
});
//# sourceMappingURL=index.js.map
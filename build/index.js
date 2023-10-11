"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const players_1 = __importDefault(require("./routes/players"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3000;
console.log('PORT', PORT);
app.use((0, cors_1.default)());
app.get('/ping', (_, res) => {
    console.log('someone pinged here ');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log({ app });
});
app.use('/players', players_1.default);

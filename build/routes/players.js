"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerServices = __importStar(require("../services/playerServices"));
const router = express_1.default.Router();
router.get('/nosensitive', (_req, res) => {
    res.send(playerServices.getPlayerWithoutSensitiveInfo());
});
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield playerServices.getAllPlayers();
    // res.send(playerServices.getAllPlayers());
    res.json(data);
}));
router.get('/:id', (req, res) => {
    const player = playerServices.findById(+req.params.id);
    return (player != undefined)
        ? res.send(player)
        : res.sendStatus(404);
});
router.get('/list/:list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const player = yield playerServices.findByList(+req.params.list);
    return (player != undefined)
        ? res.send(player)
        : res.sendStatus(404);
}));
router.post('/', (req, res) => {
    try {
        const { list, name, lastName, age, position, shirtNumber } = req.body;
        const newPlayer = playerServices.addPlayer({
            list,
            name,
            lastName,
            age,
            position,
            shirtNumber,
        });
        res.json(newPlayer);
    }
    catch (e) {
        res.status(400);
    }
});
router.put('/assistance/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const player = yield playerServices.updateAssistance(+req.params.id);
    // const { lista, name, lastName, age, position, shirtNumber } = req.body;
    // const updatedPlayer = playerServices.updateAssistance({
    //     id: id,
    // })
    return (player != undefined)
        ? res.json(player)
        : res.sendStatus(404);
    // res.json(updatedPlayer);
}));
exports.default = router;

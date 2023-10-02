"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByList = exports.updateAssistance = exports.addPlayer = exports.getPlayerWithoutSensitiveInfo = exports.getAllPlayers = exports.findById = void 0;
const DB_1 = require("../DB");
// const players: Array<Player> = playerData as Player[];
// export const getPlayers = (): Player[] => players
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const entry = yield DB_1.prisma.player.findUnique({
        where: {
            id: id
        }
    });
    return entry;
});
exports.findById = findById;
const getAllPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield DB_1.prisma.player.findMany();
    console.log(data);
    // return (await prisma.player.findMany())
    return data;
});
exports.getAllPlayers = getAllPlayers;
const getPlayerWithoutSensitiveInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield DB_1.prisma.player.findMany()).map(({ list, name, lastName, age, position, shirtNumber }) => ({
        list,
        name,
        lastName,
        age,
        position,
        shirtNumber,
    }));
});
exports.getPlayerWithoutSensitiveInfo = getPlayerWithoutSensitiveInfo;
const addPlayer = (newPlayer) => __awaiter(void 0, void 0, void 0, function* () {
    // const newPlayerEntry: Player = {
    //     id: Math.max(...players.map(p => p.id)) + 1,
    //     faltas: 0,
    //     asistencias: 0,
    //     ...newPlayerType
    // } 
    // players.push(newPlayerEntry);
    //prisma client connection
    console.log(newPlayer);
    const createdPlayer = yield DB_1.prisma.player.create({
        data: Object.assign({}, newPlayer)
    });
    console.log(createdPlayer);
    return createdPlayer;
});
exports.addPlayer = addPlayer;
const updateAssistance = (list) => __awaiter(void 0, void 0, void 0, function* () {
    const player = yield DB_1.prisma.player.findUnique({
        where: {
            list: list
        }
    });
    console.log({ player });
    if (player === null) {
        return undefined;
    }
    else {
        const updatedPlayer = yield DB_1.prisma.player.update({
            where: {
                list: list
            },
            data: {
                assists: {
                    increment: 1
                }
            }
        });
        console.log({ updatedPlayer });
        return updatedPlayer;
    }
});
exports.updateAssistance = updateAssistance;
const findByList = (list) => __awaiter(void 0, void 0, void 0, function* () {
    const player = yield DB_1.prisma.player.findUnique({
        where: {
            list: list
        }
    });
    return player;
});
exports.findByList = findByList;
// const playersWithoutSensitiveInfo = getPlayerWithoutSensitiveInfo()

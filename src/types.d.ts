import { Player as TPlayer} from "@prisma/client";

export type Player = TPlayer;

export type NonSensitivePlayer = Omit<Player, 'id' | 'noAssist' | 'assists' | "createdAt" | 'updatedAt'>;

interface SpecialPlayer extends Player {
    foto: string;
}

export type newPlayerType = Omit<Player, 'id' | 'noAssist' | 'assists' | "createdAt" | 'updatedAt'>;

// "id": 3,
//"lista": 1,
//"name":"Ant",
//"lastName": "coapio",
//"age": 17,
//"position": "rb",
//"faltas": 8,
//"asistencias": 10
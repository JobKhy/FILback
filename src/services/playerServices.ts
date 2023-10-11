import { Player } from '@prisma/client';
import { prisma } from '../DB';
import { NonSensitivePlayer, newPlayerType } from '../types';

// const players: Array<Player> = playerData as Player[];



// export const getPlayers = (): Player[] => players

export const findById = async (id: number): Promise<Player | null> => {
    const entry = await prisma.player.findUnique({
        where: {
            id: id
        }
    })  

    return entry;
}

export const deleteById = async (id: number): Promise<Player | null> => {
    const entry = await prisma.player.delete({
        where: {
            id: id
        }
    })

    return entry;
}

export const getAllPlayers = async () : Promise<Player[]> => {
    const data = await prisma.player.findMany();
    console.log(data);
    
    // return (await prisma.player.findMany())

    return data;
}

export const getPlayerWithoutSensitiveInfo = async() : Promise<NonSensitivePlayer[]> => {
    return (await prisma.player.findMany()).map(({ list, name, lastName, age, position, shirtNumber }) => ({
        list,
        name,
        lastName,
        age,
        position,
        shirtNumber,
}));
}

export const addPlayer = async ( newPlayer: newPlayerType ): Promise<Player> => {
    // const newPlayerEntry: Player = {
    //     id: Math.max(...players.map(p => p.id)) + 1,
    //     faltas: 0,
    //     asistencias: 0,
    //     ...newPlayerType
    // } 

    // players.push(newPlayerEntry);

    //prisma client connection
    console.log(newPlayer);

    const createdPlayer = await prisma.player.create({
        data: {
            ...newPlayer
        }
    })

    console.log(createdPlayer);
    
    
    return createdPlayer;

}

export const updateAssistance = async (list: number): Promise<Player | undefined> => {
    const player = await prisma.player.findUnique({
        where: {
            list: list
        }
    })
    console.log({player});
    
    if (player === null) {
        return undefined;
    } else {
        const updatedPlayer = await prisma.player.update({
            where: {
                list: list
            },
            data: {
                assists: {
                    increment: 1
                }
            }
        })
        console.log({updatedPlayer});
        return updatedPlayer;
    }
}

export const findByList = async (list: number): Promise<Player | null> => {
    const player = await prisma.player.findUnique({
        where: {
            list: list
        }
    })

    return player;
}

// const playersWithoutSensitiveInfo = getPlayerWithoutSensitiveInfo()
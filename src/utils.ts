// import { newPlayerType } from "./types"

// const parseString = (stringFromRequest: any): string => {
//     if (typeof stringFromRequest !== 'string') {
//         throw new Error('Incorrect or missing string');
//     }
//     return stringFromRequest;
// }

// const isString = (string: any): boolean => {
//     if (typeof string !== 'string') {
//         return false;
//     }
//     return true;
// }

// const toNewPlayer = (object: any): newPlayerType => {
//     const newPlayer: newPlayerType = {
//         lista: parseString(object.lista),
//         name: parseString(object.name),
//         lastName: parseString(object.lastName),
//         age: parseString(object.age),
//         position: parseString(object.position),
//         shirtNumber: parseString(object.shirtNumber),
//     }
//     return newPlayer;
// }


// export default toNewPlayer;
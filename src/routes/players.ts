import express from 'express';
import * as playerServices from '../services/playerServices';

const router = express.Router();

router.get('/nosensitive', ( _req, res) => {
    res.send(playerServices.getPlayerWithoutSensitiveInfo());
})

router.get('/', async ( _req, res) => {
    const data = await playerServices.getAllPlayers();
    // res.send(playerServices.getAllPlayers());
    res.json(data);
})

router.get('/:id', ( req, res) => {
    const player = playerServices.findById(+req.params.id);
    
    return (player != undefined) 
    ? res.send(player) 
    : res.sendStatus(404);
})

router.get('/list/:list', async( req, res) => {
    const player = await playerServices.findByList(+req.params.list);
        
        
    return (player != undefined) 
    ? res.send(player) 
    : res.sendStatus(404);
})

router.post('/', ( req, res) => {

    try{
        const { list, name, lastName, age, position, shirtNumber } = req.body;   

        const newPlayer = playerServices.addPlayer({
            list,
            name,
            lastName,
            age,
            position,
            shirtNumber,
        })

        res.json(newPlayer);
    } catch (e) {
        res.status(400)
    }
})

router.put('/assistance/:id', async ( req, res) => {
    const player = await playerServices.updateAssistance(+req.params.id);
    // const { lista, name, lastName, age, position, shirtNumber } = req.body;

    // const updatedPlayer = playerServices.updateAssistance({
    //     id: id,
    // })

    return (player != undefined)
    ? res.json(player)
    : res.sendStatus(404);

    // res.json(updatedPlayer);
})

export default router;
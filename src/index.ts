import express from 'express';
import playersRouter from './routes/players';
import cors from 'cors';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use(cors());

app.get('/ping', ( _, res ) => {
    console.log('someone pinged here ');
    res.send('pong');
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/players', playersRouter);
import express from 'express';
import playersRouter from './routes/players';
import cors from 'cors';

const app = express();


app.use(express.json());

const PORT = process.env.PORT || 3000 ;
console.log('PORT', PORT);

app.use(cors({origin : '*'}));

app.get('/ping', ( _, res ) => {
    console.log('someone pinged here ');
    res.send('pong');
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log({app});
    
});

app.use('/players', playersRouter);
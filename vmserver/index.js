import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import visitorRoutes from './routes/visitors.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', visitorRoutes);


app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => {console.log(`Listening at http://localhost:${PORT}`)});
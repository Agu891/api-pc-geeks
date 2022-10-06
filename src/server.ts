import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import handlers from './routes';
import cors from 'cors';
import { errorHandler } from './middlewares/error-handler';
const server = express();

const PORT = process.env.PORT || 5000;
//Load ENV vars
dotenv.config();

//cors enable
server.use(cors());
//usamos el middleware para parsear json en el body
server.use(express.json());

//morgan
server.use(morgan('combined'));

//Routes
server.use('/api/v1', handlers);
//handlerErrors
server.use(errorHandler);

server.get('/', (req, res) => {
  res.json({ messsage: 'deberias iniciar los request en /api/v1/<entidad> ' });
});

server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

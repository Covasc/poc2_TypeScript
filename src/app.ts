import express from "express";
import { addNewSchedule, deleteSchedule, getAllSchedules } from "./controllers/calculatorController.js";

const server = express();
server.use(express.json());

server.get('/health', (req, res) => {
    res.send('API up')
});
server.post('/schedule', addNewSchedule);
server.get('/schedule', getAllSchedules);
server.post('/user/schedules', deleteSchedule);

server.listen(5000, () => {
    console.log('Executando')
});
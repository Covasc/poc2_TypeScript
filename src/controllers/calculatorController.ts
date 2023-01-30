import { Request, Response } from "express";
import { scheduleList, scheduleById, deleteById } from "../repositories/scheduleRepository.js";
import { Schedule, Id } from "../protocols/schedule.js";
import { ScheduleSchema, DeleteSchema } from "../schemas/schedule.schemas.js";


export async function addNewSchedule (req: Request, res: Response) {
    
    const schedule = req.body as Schedule;

    const { error } = ScheduleSchema.validate(schedule);
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    } 

    try {
        await scheduleById(schedule);
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteSchedule (req: Request, res: Response) {
    
    const id = req.body as Id;

    const { error } = DeleteSchema.validate(id);
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    } 

    try {
        await deleteById(id);
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getAllSchedules (req: Request, res: Response) {
    
    try {
        const result = await scheduleList();       
        res.send(result).status(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
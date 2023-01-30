import prisma from "../db/database.js";
import { Schedule, NewSchedule, Id } from "../protocols/schedule.js";

export async function newSchedule (schedule: Schedule) {
    return prisma.schedules.create({
        data: schedule
    })
}

export async function scheduleList () {
    return prisma.schedules.findMany();
}

export async function scheduleById (schedule: NewSchedule) {
    return prisma.schedules.upsert({
        where: {
            id: schedule.id || 0,
        },
        create: schedule as Schedule,
        update: schedule
    })
}

export async function deleteById (id: Id) {
    return prisma.schedules.delete({
        where: {
            id: id.id
        }
    })
}
import Joi from "joi";

export const ScheduleSchema = Joi.object({
    id: Joi.number(),
    client_id: Joi.number().required(),
    haircut_id: Joi.number().required(),
    employee_id: Joi.number().required(),
    date: Joi.date()
})

export const DeleteSchema = Joi.object({
    id: Joi.number().required()
})
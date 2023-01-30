import Joi from "joi";
export var ScheduleSchema = Joi.object({
    id: Joi.number(),
    client_id: Joi.number().required(),
    haircut_id: Joi.number().required(),
    employee_id: Joi.number().required(),
    date: Joi.date()
});
export var DeleteSchema = Joi.object({
    id: Joi.number().required()
});

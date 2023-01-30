export type Id = {
    id: number
};

export type ScheduleEntity = {
    id?: number,
    client_id: number, //O '?' na frente da propriedade significa que é opcional, porém quando existir deve obedecer a tipagem especificada
    haircut_id: number,
    employee_id: number,
    date: Date,
};

export type Schedule = Omit<ScheduleEntity, "id">

export type NewSchedule = Partial<ScheduleEntity>

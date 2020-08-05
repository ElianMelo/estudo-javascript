import express from 'express';
import db from './connection';
import convertHourToMinuts from '../utils/convertHourToMinuts';

const routes = express.Router();

routes.post('/classes', async (request, response) => {

    interface ScheduleItem {
        week_day: number;
        from: string;
        to: string;
    }

    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const trx = await db.transaction();

    try {
        const insertedUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio,
        });
    
        const user_id = insertedUsersIds[0];
    
        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id,
        });
    
        const class_id = insertedClassesIds[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinuts(scheduleItem.from),
                to: convertHourToMinuts(scheduleItem.to),
            }
        });
    
        await trx('class_schedule').insert(classSchedule);
    
        await trx.commit();
    
        return response.status(201).send();
    } catch (err) {
        await trx.rollback();

        return response.status(400).json({
            error: 'Unexpected error while creating new class'
        })
    }
});

export default routes;
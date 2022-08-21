import { body } from "express-validator";

export const validatedFields = [
    body('email').isEmail(),
    body('sender_FIO').isLength({min:3}),
    body('request_task').isLength({min:10}),
    body('room').isLength({min:1, max:7}),
    body(['start_time_to_arrive','end_time_to_arrive']).matches('^[0-9]{1,2}:[0-9]{2}$')
]
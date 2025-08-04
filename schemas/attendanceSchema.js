import {z} from 'zod'


export const Validation = z.object({
    employee_id: z.number().positive(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato YYYY-MM-DD"),
    status:z.enum(['present', 'absent', 'vacation', 'sick'])
});

export const patchValidacion=Validation.partial()
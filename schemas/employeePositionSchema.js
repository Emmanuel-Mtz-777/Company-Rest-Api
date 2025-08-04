import { z } from 'zod';

export const Validation = z.object({
    employee_id: z.number().positive(),
    position_id:  z.number().positive(),
    start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato YYYY-MM-DD"),
    end_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato YYYY-MM-DD").nullable().optional(),
});

export const patchValidacion=Validation.partial()
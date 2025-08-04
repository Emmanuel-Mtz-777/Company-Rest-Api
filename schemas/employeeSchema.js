import { z } from 'zod';

export const createValidation = z.object({
    first_name: z.string().min(3, "El nombre es obligatorio"),
    last_name: z.string().min(3, "Apellidos obligatorios"),
    email: z.string().email("Es necesario un email válido"),
    phone: z.string().regex(/^\d*$/, "El teléfono solo puede contener números").max(10, "El teléfono no puede superar 10 caracteres").nullable().optional(),
    hire_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato YYYY-MM-DD"),
    salary: z.number().positive("Es necesario un salario válido"),
    department_id: z.number().int().positive().nullable().optional(),
});

export const patchValidacion=createValidation.partial()
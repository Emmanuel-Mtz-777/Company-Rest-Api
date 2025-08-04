import { z } from 'zod';

export const departmentValidation = z.object({
    name: z.string( "El nombre del departamento es obligatorio"),
});

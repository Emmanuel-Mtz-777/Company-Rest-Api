import { z } from 'zod';

export const positionValidation = z.object({
    title: z.string( "El nombre del departamento es obligatorio"),
});

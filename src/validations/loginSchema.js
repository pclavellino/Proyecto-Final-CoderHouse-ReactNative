import { object, string } from 'yup';

export const loginSchema = object().shape({
    email: string()
        .required("Este campo es obligatorio")
        .email("La direccion no es válida"),
    password: string()
        .required("Este campo es obligatorio")
        .min(6, "La contraseña debe tener un minimo de 6 caracteres")
})
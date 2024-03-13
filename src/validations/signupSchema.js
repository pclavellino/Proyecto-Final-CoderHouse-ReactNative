import { object, string, ref } from 'yup';

export const signupSchema = object().shape({
    email: string()
        .required("Este campo es obligatorio")
        .email("La direccion no es válida"),
    password: string()
        .required("Este campo es obligatorio")
        .min(6, "La contraseña debe tener un minimo de 6 caracteres"),
    passwordConfirm: string()
        .oneOf([ref("password"), null], "Las contraseñas no coiniden")
        .required("Este campo es obligatorio")
})
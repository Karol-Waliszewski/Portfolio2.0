import * as Yup from 'yup'

export type FormValues = {
  name: string
  email: string
  message: string
}

export const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Niepoprawne imię i nazwisko')
    .required('Imię i nazwisko jest wymagane'),
  email: Yup.string()
    .email('Niepoprawny email')
    .required('Email jest wymagany'),
  message: Yup.string()
    .min(10, 'Wiadomość jest za krótka')
    .max(500, 'Wiadomość jest za długa')
    .required('Wiadomość jest wymagana'),
})

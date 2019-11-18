import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required(
      'Put a descriptive title Ex: "Nikon COOLPIX P900 Digital Camera with 83x Optical Zoom"'
    ),
  price: yup
    .number('please only input numbers')
    .min(1)
    .positive('Number cannot be negative')
    .required('Enter a value'),
  city: yup
    .string()
    .trim()
    .required('Required'),
  state: yup
    .string()
    .trim()
    .required('Required'),
  zipcode: yup.number().required('Required'),
  category: yup.string().required('Choose a Category'),
  description: yup
    .string()
    .trim()
    .required('Description is required'),
  paymentType: yup.string().required('Select your payment preference'),
  condition: yup
    .string()
    .required('Select the option that best describes your Equipment condition'),
});
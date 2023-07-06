import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  location: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable(),
});

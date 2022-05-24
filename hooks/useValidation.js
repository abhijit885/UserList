import _ from 'lodash';
import * as yup from 'yup';

export const useValidation = params => {

  let schemaObj = {
    email: yup
      .string()
      .email('please enter valid email')
      .required('email address is required'),
    password: yup
      .string()
      .required('password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'must contain 6 characters, one uppercase, one lowercase, one number and one special case character',
      ),
    name: yup
      .string()
      .required('name is required'),
  };

  if (Array.isArray(params)) {
    schemaObj = _.pick(schemaObj, params);
  }

  const validationSchema = yup.object().shape(schemaObj);

  return validationSchema;
};

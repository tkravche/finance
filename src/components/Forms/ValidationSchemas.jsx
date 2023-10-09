import * as Yup from 'yup';

export const RegistrationSchema = Yup.object({
  username: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .max(20, 'Must be up to 20 characters')
    .matches(
      /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
      'Name can only contain letters or numbers.'
    )
    .required('Required'),

  email: Yup.string()
    .email('Invalid email address')
    .min(6, 'Must be at least 6 characters')
    .max(25, 'Must be up to 25 characters')
    .required('Required'),

  password: Yup.string()
    .min(6, 'Must be 6 characters or less')
    .max(12, 'Must be up to 12 characters')
    .required('Required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]),?[\s\S]{6,12}$/,
      'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number'
    ),

  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/, 'This is an ERROR email')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .max(16, 'Password is too long - should be 16 chars maximum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      'Password must contain 1 lowercase, 1 uppercase letter and 1 number.'
    ),
});

export const UpdateUserSchema = Yup.object({
  avatarURL: Yup.string(),
  name: Yup.string()
    .min(2)
    .matches(
      /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
      'Name can only contain letters or numbers.'
    ),
});

export const SubscribeSchema = Yup.object({
  email: Yup.string()
    .matches(/\S+@\S+\.\S+/, 'This is an ERROR email')
    .required('Required'),
});

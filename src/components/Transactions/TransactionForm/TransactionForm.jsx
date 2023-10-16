// import React, { useState } from 'react';
// import { parse } from 'date-fns';
// import { Formik } from 'formik';
// import { object, string, date, bool, mixed, number } from 'yup';

// const TransactionForm = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <Formik
//       initialValues={{
//         date: new Date(),
//         type: isChecked,
//         comment: '',
//         value: '',
//         category: null,
//       }}
//       validationSchema={object({
//         type: bool(),
//         category: mixed().when('type', {
//           is: type => !type,
//           then: () => mixed().required('Please choose transaction category.'),
//           otherwise: () => mixed().notRequired(),
//         }),
//         value: number()
//           .typeError('Transaction value must be a number')
//           .test(
//             'len',
//             'Transaction value can be a maximum of 16 characters',
//             val => val.toString().length <= 16
//           )
//           .required('Please provide transaction value.'),
//         date: date()
//           .transform(dateTransformer)
//           .typeError('Please enter a valid date')
//           .required('Please provide transaction date.'),
//         comment: string().notRequired(),
//       })}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         handleSubmit(values);
//         resetForm();
//         setSubmitting(false);
//         closeModal();
//       }}
//       enableReinitialize
//     >
//       {({ values, setFieldValue, handleBlur }) => (
//         <FormikForm>
//           <Heading>Add transaction</Heading>
//           <Switch
//             name="type"
//             checked={isChecked}
//             onClick={handleCheckboxChange}
//             type="radio"
//           />
//           {!isChecked && (
//             <InputWrapper>
//               <CategorySelect
//                 name="category"
//                 placeholder="Select a category"
//                 value={values.category}
//                 onChange={option => setFieldValue('category', option)}
//                 options={categories?.map(option => ({
//                   value: option.type,
//                   label: option.name,
//                   id: option.id,
//                 }))}
//               />
//               <ErrorText name="category" component="div" />
//             </InputWrapper>
//           )}
//           <TwoColumnRow>
//             <InputWrapper>
//               <BaseInput
//                 placeholder="0.00"
//                 title="Please put the transaction value"
//                 name="value"
//                 type="number"
//                 autoComplete="off"
//                 value={values.value}
//                 onChange={value => setFieldValue('value', value.target.value)}
//                 onBlur={handleBlur}
//                 onKeyUp={handleBlur}
//               />
//               <ErrorText name="value" component="div" />
//             </InputWrapper>
//             <CalendarWrapper>
//               <DatetimePicker
//                 dateFormat="DD.MM.YYYY"
//                 name="date"
//                 type="date"
//                 timeFormat={false}
//               />
//               <CiCalendarDate />
//             </CalendarWrapper>
//           </TwoColumnRow>
//           <InputWrapper>
//             <Textarea
//               placeholder="Comment"
//               title="Please describe your transaction."
//               name="comment"
//               type="text"
//               autoComplete="off"
//             />
//             <ErrorText name="comment" component="div" />
//           </InputWrapper>
//           <Button type="submit" variant="registration">
//             Add
//           </Button>
//           <Button
//             type="button"
//             variant="cancel"
//             style={{ marginBottom: 0, marginTop: '-40px' }}
//             onClick={() => closeModal()}
//           >
//             Cancel
//           </Button>
//         </FormikForm>
//       )}
//     </Formik>
//   );
// };

// export default TransactionForm;

// import React, { useState } from 'react';
import Switch from '../Switch/Switch';

const TransactionForm = () => {
  // const [isChecked, setIsChecked] = useState(false);
  // const handleCheckboxChange = () => {
  //   setIsChecked(isChecked => !isChecked);
  // };
  return (
    <Switch
      name="type"
      // checked={isChecked}
      // onClick={handleCheckboxChange}
      type="radio"
    />
  );
};

export default TransactionForm;

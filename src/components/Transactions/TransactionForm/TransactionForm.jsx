import { useState } from 'react';
import { parse } from 'date-fns';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { object, string, date, bool, mixed, number } from 'yup';
import {
  BaseInput,
  CalendarWrapper,
  ErrorText,
  FormikForm,
  Heading,
  InputWrapper,
  TwoColumnRow,
} from './TransactionForm.styled';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import Comment from '../Comment/Comment';
import { selectTransactionsCategories } from '../../../redux/selectors';
import Switch from '../Switch/Switch';
import CategorySelect from '../CategorySelect/CategorySelect';
import Button from '../../Buttons/Button';
import { createTransactionThunk } from '../../../redux/transactions/transOperations';

const TransactionForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionsCategories);

  const incomeId = categories
    .filter(category => (category.type === 'INCOME' ? category.id : null))
    .reduce(function (target, key, idx) {
      target[idx] = key;
      return target;
    });

  const dateTransformer = (_, originalValue) => {
    const parsedDate = parse(originalValue, 'dd-MM-yyyy', new Date());
    return Number(parsedDate) ? new Date('') : new Date();
  };

  const handleCheckboxChange = () => {
    setIsChecked(isChecked => !isChecked);
  };

  const handleSubmit = values => {
    const data = {
      transactionDate: JSON.parse(JSON.stringify(new Date(values.date))),
      type: isChecked ? 'INCOME' : 'EXPENSE',
      categoryId: isChecked ? incomeId.id : values.category.id,
      comment: values.comment,
      amount: isChecked ? Number(values.value) : Number(-values.value),
    };
    console.log(data.transactionDate);
    dispatch(createTransactionThunk(data));
  };

  return (
    <Formik
      initialValues={{
        date: new Date(),
        type: isChecked,
        comment: '',
        value: '',
        category: null,
      }}
      validationSchema={object({
        type: bool(),
        category: mixed().when('type', {
          is: type => !type,
          then: () => mixed().required('Please choose transaction category.'),
          otherwise: () => mixed().notRequired(),
        }),
        value: number()
          .typeError('Transaction value must be a number')
          .test(
            'len',
            'Transaction value can be a maximum of 16 characters',
            val => val.toString().length <= 16
          )
          .required('Please provide transaction value.'),
        date: date()
          .transform(dateTransformer)
          .typeError('Please enter a valid date')
          .required('Please provide transaction date.'),
        comment: string()
          .notRequired()
          .max(25, 'Your comment can be maximum 25 characters')
          .min(5, 'Your commnet can be minimum 5 characters'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        try {
          handleSubmit(values);
          resetForm();
          setSubmitting(false);
        } catch (error) {
          console.error(error);
        }
      }}
      enableReinitialize
    >
      {({ values, setFieldValue, handleBlur }) => (
        <FormikForm>
          <Heading>Add transaction</Heading>
          <Switch
            name="type"
            checked={isChecked}
            onClick={handleCheckboxChange}
          />
          {!isChecked && (
            <InputWrapper>
              <CategorySelect
                name="category"
                placeholder="Select a category"
                value={values.category}
                onChange={option => setFieldValue('category', option)}
                options={categories
                  ?.map(option => {
                    if (option.name !== 'Income') {
                      return {
                        value: option.type,
                        label: option.name,
                        id: option.id,
                      };
                    }
                    return null;
                  })
                  .filter(Boolean)}
              />
              <ErrorText name="category" component="div" />
            </InputWrapper>
          )}
          <TwoColumnRow>
            <InputWrapper>
              <BaseInput
                placeholder="0.00"
                title="Please put the transaction value"
                name="value"
                type="number"
                autoComplete="off"
                value={values.value}
                onChange={value => setFieldValue('value', value.target.value)}
                onBlur={handleBlur}
                onKeyUp={handleBlur}
              />
              <ErrorText name="value" component="div" />
            </InputWrapper>
            <CalendarWrapper>
              <DateTimePicker
                dateFormat="dd-MM-yyyy"
                name="date"
                type="date"
                timeFormat={false}
              />
            </CalendarWrapper>
          </TwoColumnRow>
          <InputWrapper>
            <Comment
              placeholder="Comment"
              title="Please describe your transaction."
              name="comment"
              type="text"
              autoComplete="off"
            />
            <ErrorText name="comment" component="div" />
          </InputWrapper>
          <Button type={'submit'} bgColor={true} textCl={true} marginB={'40px'}>
            Add
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default TransactionForm;

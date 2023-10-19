import 'react-datepicker/dist/react-datepicker.css';
import { format, isValid } from 'date-fns';
import { useField, useFormikContext } from 'formik';
import { StyledDateTime, IconStyled } from './DateTimePicker.styled';
import DatePicker from 'react-datepicker';
import React from 'react';

const DateTimePicker = ({ name }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <label>
      <input type="text" value={value} readOnly onClick={onClick} ref={ref} />
      <IconStyled onClick={onClick} />
    </label>
  ));

  return (
    <StyledDateTime>
      <DatePicker
        inputProps={{ readOnly: true }}
        selected={field.value ? new Date(field.value) : null}
        closeOnSelect={true}
        onChange={values => {
          if (isValid(values)) {
            setFieldValue(field.name, values, format(values, 'dd-MM-yyyy'));
          }
        }}
        dateFormat="dd.MM.yyyy"
        customInput={<CustomInput />}
      />
    </StyledDateTime>
  );
};

export default DateTimePicker;

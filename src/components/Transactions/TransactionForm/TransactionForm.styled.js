import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;

  @media (max-width: 767.9px) {
    width: 280px;
  }
`;
export const Heading = styled.h3`
  color: var(--white);
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
export const TransactionTypeDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 16px;
  }
  svg {
    width: 15px;
    height: 15px;
    color: var(--transparency-40);
  }
`;

export const IncomeSpan = styled.span`
  color: ${props => (props.$active ? 'var(--yellow)' : 'var(--total-white)')};
`;
export const ExpenseSpan = styled.span`
  color: ${props =>
    props.$active ? 'var(--dashboard-text)' : 'var(--total-white)'};
`;

export const BaseInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--transparency-40);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  color: var(--white);
  background-color: transparent;
  max-width: 100%;
  margin-bottom: 10px;
  width: 280px;

  &::placeholder {
    color: var(--white);
  }

  &:focus {
    outline: none;
  }

  &:focus {
    outline: none;

    + svg {
      fill: var(--white);
      transition: fill 150ms;
    }
  }

  + svg {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 10px;
    top: -1px;
    fill: var(--white);
    transition: fill 150ms;
  }

  @media (min-width: 768px) {
    width: 409.5px;
  }
`;

export const placeholderStyles = {
  placeholder: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: 'var(--total-black)',
    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '0px',
    },
  }),
};
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  ${BaseInput} {
    @media (max-width: 767.9px) {
      padding-left: 20px;
      text-align: left;
    }
  }
`;
export const TwoColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 41px;
  max-width: 410px;

  input {
    width: 181px;
  }

  & > :first-child input {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    outline: none;

    @media (max-width: 767.9px) {
      text-align: left;
    }
  }

  @media (max-width: 767.9px) {
    flex-direction: column;
    max-width: 100%;
    width: 100%;

    input {
      width: 100%;
    }
  }
`;
export const CalendarWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -2px;
    right: 14px;
    width: 24px;
    height: 24px;
    fill:  rgb(88, 62, 155);
  }

  @media (max-width: 767.9px) {
    svg {
      right: 20px;
    }
  }
`;
export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  top: 30px;
  left: 0px;
  font-size: 13px;
  color: red;
`;
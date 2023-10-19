import styled from 'styled-components';
import { CiCalendarDate } from 'react-icons/ci';

export const IconStyled = styled(CiCalendarDate)`
  position: absolute;
  cursor: pointer;
`;

export const StyledDateTime = styled.div`
  && {
    input {
      position: relative;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
      font-size: 18px;
      color: #fff;
      background-color: transparent;
      padding-left: 20px;
      padding-bottom: 4.5px;
      cursor: pointer;

      &:focus-visible {
        outline: 0;
      }
    }

    &.rdt {
      position: relative;
    }

    &.rdtPicker {
      position: absolute;
      min-width: 250px;
      padding: 4px;
    }

    .rdtPicker td.rdtToday:before {
      border-bottom: 7px solid #4a56e2;
    }

    @media (max-width: 767.9px) {
      input {
        width: 280px;
      }
    }
  }
`;

import styled from 'styled-components';

export const TransactionColor = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  margin-right: 16px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const StyledWrap = styled.div`
  max-height: 390px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: thin;
  scrollbar-color: transparent;
`;

export const StyledTable = styled.table`
  margin: 0;
  border-radius: 8px;
  border-collapse: collapse;
  color: var(--white);
  width: 281px;

  th,
  td {
    height: 55.1px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    width: 319px;
  }

  @media screen and (min-width: 1280px) {
    width: 399px;

    th,
    td {
      height: 55.2px;
    }
  }
`;

export const WrapSummary = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapIncome = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 4px;
  }
`;

export const Thead = styled.thead`
  border-radius: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  tr {
    background-color: var(--background-table);
    backdrop-filter: blur(50px);
  }
`;
export const Th = styled.th`
  padding: 16px;
`;

export const ThCategory = styled(Th)`
  border-radius: 8px 0 0 8px;
  text-align: left;
  position: reletive;
`;

export const ThSum = styled(Th)`
  border-radius: 0 8px 8px 0;
  text-align: right;
`;

export const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #644e89;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TdCategory = styled(Td)`
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;
`;

export const TdColor = styled(Td)`
  border-radius: 2px;
  margin-right: 16px;
`;

export const TdSum = styled(Td)`
  text-align: right;
`;

export const TotalExpense = styled.div`
  text-align: right;
  padding: 16px 16px 0 0;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  color: var(--dashboard-text);
`;

export const Total = styled.div`
  text-align: right;
  padding: 16px 16px 0 0;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  color: var(--yellow);
`;

export const Transaction = styled.div`
  text-align: left;
  padding: 16px 0 0 16px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  color: var(--white);
`;
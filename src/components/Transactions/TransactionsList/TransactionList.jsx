import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransactionThunk,
  getTransactionsThunk,
} from '../../../redux/transactions/transOperations';

import {
  selectAllTransactions,
  selectTransactionsCategories,
} from '../../../redux/selectors';
import {
  ButtonDelete,
  NoTransactionsText,
  Table,
  Td,
  TdDate,
  TdType,
  Th,
  ThCategory,
  ThComment,
  ThDate,
  ThLast,
  ThType,
  Thead,
} from './TransactionList.styled';
// import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';

const TransactionsList = () => {
  const transactions = useSelector(selectAllTransactions);
  const categories = useSelector(selectTransactionsCategories);

  const dispatch = useDispatch();

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const handleDelete = transactionId => {
    dispatch(deleteTransactionThunk(transactionId))
      .unwrap()
      .then(() => dispatch(getTransactionsThunk()));
    //   .then(() => dispatch(refreshBalanceThunk()));
  };

  const transactionSymbol = type =>
    type === 'INCOME' ? '+' : type === 'EXPENSE' ? '-' : '';

  const gategoryNamesbyId = categories.reduce((res, category) => {
    res[category.id] = category.name;
    return res;
  }, {});

  return (
    <Table>
      <Thead>
        <tr>
          <ThDate>Date</ThDate>
          <ThType>Type</ThType>
          <ThCategory>Category</ThCategory>
          <ThComment>Comment</ThComment>
          <Th>Sum</Th>
          <Th></Th>
          <ThLast></ThLast>
        </tr>
      </Thead>
      <tbody>
        {transactions.length === 0 ? (
          <tr>
            <NoTransactionsText colSpan="7">
              Your transactions will be here
            </NoTransactionsText>
          </tr>
        ) : (
          transactions.map(
            ({ id, transactionDate, type, categoryId, comment, amount }) => (
              <tr key={id}>
                <TdDate>{formatDate(transactionDate)}</TdDate>
                <TdType>{transactionSymbol(type)}</TdType>
                <Td>
                  {gategoryNamesbyId[categoryId].length > 10
                    ? gategoryNamesbyId[categoryId].substring(0, 10) + '...'
                    : gategoryNamesbyId[categoryId]}
                </Td>
                <Td>
                  {comment
                    ? comment.length > 8
                      ? comment.substring(0, 8) + '...'
                      : comment
                    : '-'}
                </Td>
                <Td className={type === 'INCOME' ? 'income' : 'expense'}>
                  {Math.abs(amount).toFixed(2)}
                </Td>
                <Td>
                  {/* <EditTransactionModal
                    item={{
                      id,
                      transactionDate,
                      type,
                      categoryId,
                      comment,
                      amount,
                    }}
                  /> */}
                </Td>
                <Td>
                  <ButtonDelete onClick={() => handleDelete(id)}>
                    Delete
                  </ButtonDelete>
                </Td>
              </tr>
            )
          )
        )}
      </tbody>
    </Table>
  );
};

export default TransactionsList;

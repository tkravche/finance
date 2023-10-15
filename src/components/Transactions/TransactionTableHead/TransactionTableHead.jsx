import React from 'react';
import { Table } from './TransactionTableHead.styled';

const TransactionTableHead = () => {
  return (
    <Table>
      <thead>
        <tr>
          <thdate>Date</thdate>
          <thtype>Type</thtype>
          <thcategory>Category</thcategory>
          <thcomment>Comment</thcomment>
          <thc>Sum</thc>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
};

export default TransactionTableHead;

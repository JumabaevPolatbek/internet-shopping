import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { ResponseOrders } from '../../store/models/orders';

type Props = {
	index: number;
	column: string;
    order?:ResponseOrders[]
};

export function TableHeadOrders({ index, column,order }: Props) {
	return (
		<TableCell
			key={index}
		>
			{column}
		</TableCell>
	);
}

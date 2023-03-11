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
	const [active, setActive] = React.useState(false);
	const handleSort = (
		event: React.MouseEvent<
			HTMLTableCellElement,
			MouseEvent
		>
	) => {
		order?.sort()
	};
    console.log('sorted',order)
	return (
		<TableCell
			key={index}
			onClick={handleSort}
		>
			{column}
			<IconButton
				onClick={() => setActive(true)}
				color={active ? 'error' : 'default'}
			>
				<ArrowDownwardIcon />
			</IconButton>
			<IconButton
				onClick={() => setActive(false)}
				color={active ? 'default' : 'error'}
			>
				<ArrowUpwardIcon />
			</IconButton>
		</TableCell>
	);
}

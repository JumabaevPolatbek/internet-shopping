import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetCategoryAttrQuery } from '../../../store/api/attributes';
import { VariantTableCell } from './VariantTableCell';
import Button from '@mui/material/Button';
import { Attribute } from './Attribute';

export function TableAttributesCategory({
	id,
}: {
	id?: number;
}) {
	const { data: attributes, isLoading } =
		useGetCategoryAttrQuery(id);

	return (
		<div>
			<TableContainer component={Paper}>
				<Table
					size='medium'
					aria-label='a dense table'
				>
					<TableHead>
						<TableRow>
							<TableCell>
								Название аттрибута
							</TableCell>
							<TableCell rowSpan={3}>
								Значение аттрибута
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{attributes &&
							attributes.map((attribute) => (
								<Attribute
									key={
										attribute.attribute_name
									}
									{...attribute}
								/>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

import React from 'react';
import { useGetFilterProductQuery } from '../../store/api/search';
import { StateSearch } from '../../store/api/search/searchSlice';
import { Products } from '../../store/models/products';
import { useAppSlector } from '../../utils/hook';
import { AdvancedBtnsPrice } from './AdvancedBtnsPrice';
import { AsideBtnsCategory } from './AsideBtnsCategory';

type Form = {
	type: string;
	filters: StateSearch;
};

export function AdvancedSearch() {
	const [typeFilter, setTypeFilter] = React.useState<
		'category' | 'price' | 'attributes' | ' '
	>(' ');
	const state = useAppSlector(
		(state) => state.searchState
	);
	const { data } = useGetFilterProductQuery({
		type: typeFilter,
		filters: state,
	});
	console.log(state);
	console.log('Type', typeFilter);
	console.log('Products', data);
	return (
		<div className='container mx-auto flex px-[15px] mt-[20px]'>
			<div className='flex flex-col'>
				<AsideBtnsCategory
					setTypeFilter={setTypeFilter}
					type={typeFilter}
				/>
				<AdvancedBtnsPrice
					setTypeFilter={setTypeFilter}
					type={typeFilter}
				/>
			</div>
			<div className='flex-1'></div>
		</div>
	);
}

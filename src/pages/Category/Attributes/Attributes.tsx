import * as React from 'react';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FormAttr } from './FormAttr';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return (
		<Slide
			direction='up'
			ref={ref}
			{...props}
		/>
	);
});

export function Attributes({
	setAttr,
	idCategory,
}: {
	setAttr?: React.Dispatch<React.SetStateAction<boolean>>;
	idCategory?: number;
}) {
	return (
		<div>
			<FormAttr />
		</div>
	);
}

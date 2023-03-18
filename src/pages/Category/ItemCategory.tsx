import React from 'react';
import {
	Collapse,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteCategoryMutation } from '../../store/api/category';
import { Box } from '@mui/system';
import { Category } from '../../store/models/categories';
import { ItemsAttr } from './Attributes/ItemsAttr';
import { toast } from 'react-toastify';
import CustomizedDialogs from '../../components/BootstrapDialog/CustomizedDialogs';
import { EditCategory } from './Edit/EditCategories';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import { FormAttr } from './Attributes/FormAttr';
const ItemCategory: React.FC = (
	props: Partial<Category>
) => {
	const { name, id, parent_category } = props;
	const [delCategory, result] =
		useDeleteCategoryMutation();
	const [open, setOpen] = React.useState(false);
	const [attr, setAttr] = React.useState(false);
	const [modal, setModal] = React.useState(false);
	const handleDelCategory = async () =>
		await delCategory(id).then((response) => {
			toast.success(`${name} category have remove!`, {
				position: 'bottom-left',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		});
	return (
		<>
			<TableRow
				sx={{ '& > *': { borderBottom: 'unset' } }}
			>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
				<TableCell
					component='th'
					scope='row'
				>
					{name}
				</TableCell>
				<TableCell>
					{parent_category?.name}
				</TableCell>
				<TableCell>
					<div className='flex items-center'>
						<IconButton
							onClick={() => setAttr(true)}
						>
							<TextIncreaseIcon />
						</IconButton>
						<CustomizedDialogs
							open={attr}
							setOpen={setAttr}
						>
							<FormAttr />
						</CustomizedDialogs>
						<IconButton
							color='secondary'
							onClick={() => setModal(true)}
						>
							<SettingsIcon />
						</IconButton>
						<CustomizedDialogs
							open={modal}
							setOpen={setModal}
						>
							<EditCategory
								idCategory={id}
								setOpen={setModal}
							/>
						</CustomizedDialogs>
						<IconButton
							onClick={handleDelCategory}
							color='primary'
						>
							<DeleteIcon />
						</IconButton>
					</div>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{
						paddingBottom: 0,
						paddingTop: 0,
					}}
					colSpan={4}
				>
					<Collapse
						in={open}
						timeout='auto'
						unmountOnExit
					>
						<Box sx={{ margin: 1 }}>
							<Typography
								variant='h6'
								gutterBottom
								component='div'
							>
								{name} attributes
							</Typography>
							<ItemsAttr category_id={id} />
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};

export { ItemCategory };

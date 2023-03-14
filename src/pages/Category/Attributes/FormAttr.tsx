import React from "react";
import { useAppDispatch, useAppSlector } from "../../../utils/hook"
import { increaseVariant,increase } from "../../../store/reducer/addAtrribute";
import { useForm,SubmitHandler } from "react-hook-form"
import { useAddAttributeMutation } from "../../../store/api/attributes";
import {RootAttr} from '../../../store/models/attributes'
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

type Props={
    id?:number
    open?:boolean
}


export function FormAttr({id,open}:Props){

    const attrState=useAppSlector(state=>state.stateAttribute);
    const dispatch=useAppDispatch()
    const [add,result]=useAddAttributeMutation()
    const {handleSubmit,formState,register,reset}=useForm<RootAttr>({
        defaultValues:{
            attribute:{
                attribute_name:'',
                category_id:id
            },
            variants:[]
        }
    })
    const formSubmit:SubmitHandler<RootAttr>=(data)=>add(data)
    const handleClick=()=>{
        if(result.isSuccess){
            reset(formState.defaultValues)
        }
    }
    return (
		<form
			className='flex flex-col h-full'
			onSubmit={handleSubmit(formSubmit)}
		>
			{attrState.arrAttribute.map((attr, index) => (
				<div
					className='w-full flex  items-center'
					key={index}
				>
					<TextField
						{...register(
							'attribute.attribute_name'
						)}
						label={
							attr.attribute.attribute_name
						}
						type='text'
						value={
							formState.defaultValues
								?.attribute?.attribute_name
						}
					/>
					{attr.variants.map((variant, index) => (
						<TextField
							{...register(
								`variants.${index}.value`
							)}
							label={variant.value}
							// value={variant.value}
							type='text'
							key={index}
						/>
					))}
					<Tooltip title='Add variants'>
						<IconButton
							onClick={() =>
								dispatch(
									increaseVariant({
										id: index,
										values: {
											value: '',
										},
									})
								)
							}
						>
							<ControlPointIcon />
						</IconButton>
					</Tooltip>
				</div>
			))}
			<div>
                Добавить аттрибут
				<Tooltip title='Add Attribute'>
					<IconButton
						onClick={() =>
							dispatch(
								increase({
									attribute: {
										attribute_name: '',
										category_id: 0,
									},
									variants: [],
								})
							)
						}
					>
						<ControlPointIcon />
					</IconButton>
				</Tooltip>
			</div>

			<Button
				type='submit'
				variant='contained'
				color='success'
				sx={{ marginTop: 'auto' }}
				onClick={handleClick}
			>
				Save
			</Button>
		</form>
	);
}
import Switch from "@mui/material/Switch"
import TextField from "@mui/material/TextField"
import { useForm ,Controller,SubmitHandler} from "react-hook-form"
import { NewUser,NewUserAddress,NewUserDetail } from "../../store/models/userModels"

const arr = ['username','is_admin','password','first_name','last_name','user_image','phone_number','type','street_address','postal_code','city']

export function AddForm() {
    const { handleSubmit, formState, control } = useForm<NewUser|NewUserAddress|NewUserDetail >()
    const formSubmit:SubmitHandler<NewUser|NewUserAddress|NewUserDetail>=(data)=>console.log(data)
    return (
        <form
            className="flex flex-col w-[500px] h-[300px] justify-between py-2"
            onSubmit={handleSubmit(formSubmit)}
        >
            {
                arr.map((item, index) => {
                    return (
                            <Controller
                                control={control}
                                name={'city'}
                                render={() => (
                                    <TextField
                                        name="userName"
                                        label="Username"
                                        variant="outlined"
                                        type='text'
                                    />
                                 )}
                />
                    )
                })
            }
            <button className="py-2 px-3 bg-red-600 rounded">
                Add User
            </button>
        </form>
    )
}
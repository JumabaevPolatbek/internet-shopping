import SearchIcon from '@mui/icons-material/Search';
import { LinearProgress } from '@mui/material';
import { useGetAllUsersQuery } from '../../store/api/user';



export function SearchUser() {

    const {data,isLoading,isSuccess}=useGetAllUsersQuery()

    return (
        <div className="flex flex-col min-w-[350px] max-w-[600px] flex-1 px-0 md:px-2 pl-1 md:pl-2 items-center">
            <input
                type="search"
                className="bg-[#ccc] rounded-l-lg px-3 py-2 text-[18px] flex-auto"
                placeholder="Пойск"
            />
            <div className='px-4 py-1 bg-[#da002b] rounded-r-lg'>
                <SearchIcon style={{color:'#fff',fontSize:'35px'}}/>
            </div>
            {isLoading && <LinearProgress/>}
            {isSuccess && <ul
                className='list-none'
            >
                    {data?.map(user=>(
                        <li key={user.id}>
                            {user.username}
                        </li>
                    ))}
                </ul>}
    </div>
    )
}
import SearchIcon from '@mui/icons-material/Search';
import { LinearProgress } from '@mui/material';
import { useGetProductsQuery } from '../../store/api/product';
import useDebounce from '../../store/hook/debounce';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export function SearchProduct() {
    const { data, isSuccess, isLoading } = useGetProductsQuery()
    const [searchValue,setSearchValue]=React.useState('')
    const debounce = useDebounce<string>(searchValue)
    const location = useLocation()
    return (
        <div className='flex flex-col relative'>
            <div className="flex min-w-[350px] max-w-[600px] flex-1 px-0 md:px-2 pl-1 md:pl-2 items-center">
                    <input
                        type="search"
                        className="bg-[#ccc] rounded-l-lg px-3 py-2 text-[18px] flex-auto focus:bg-white transition-colors focus:outline-[#da002b] "
                    placeholder="Пойск"
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <div className='px-4 py-1 bg-[#da002b] rounded-r-lg'>
                        <SearchIcon style={{color:'#fff',fontSize:'35px'}}/>
            </div>
            </div>
            
            {isSuccess && <ul
                        className='list-none absolute top-[44px] right-0 left-0  max-h-[200px] bg-white shadow-md z-[999] overflow-y-scroll'
            >
                {isLoading && <LinearProgress/>}
                {data?.map(product => {
                    if (product.name.toLowerCase().includes(debounce) && debounce.length>3) {
                        return <li
                            className='py-2 px-4 hover:bg-slate-600 hover:text-white transition-colors cursor-pointer w-full'
                            key={product.id}
                        >
                            <NavLink to={
                                location.pathname.includes('admin') ?
                                    `edit/${product.id}` :
                                    `products/${product.id}`
                            }
                                className="block"
                            >
                                {product.name}
                            </NavLink>
                                </li>
                    }
                            })}
                    </ul>}
        </div>
        
    )
}
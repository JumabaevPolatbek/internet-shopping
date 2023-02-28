import SearchIcon from '@mui/icons-material/Search';

export function Search() {
    return (
        <div className="flex min-w-[350px] max-w-[600px] flex-1 px-0 md:px-2 pl-1 md:pl-2 items-center">
            <input
                type="search"
                className="bg-[#ccc] rounded-l-lg px-3 py-2 text-[18px] flex-auto"
                placeholder="Пойск"
            />
            <div className='px-4 py-1 bg-[#da002b] rounded-r-lg'>
                <SearchIcon style={{color:'#fff',fontSize:'35px'}}/>
            </div>
    </div>
    )
}
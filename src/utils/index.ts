import React from 'react';

const useWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPointLarge = 992
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        });
        return () => window.removeEventListener('resize', () => { setWidth(window.innerWidth) });
    }, []);
    return width
}

export default useWidth;
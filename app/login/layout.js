import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            {children}
        </div>
    );
}

export default Layout;

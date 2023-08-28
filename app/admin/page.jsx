import StickerGrid from '@/components/stickerGrid';
import React from 'react';


export const metadata = {
    title:'Admin'
}

const Page = () => {
    return (
        <div className='w-full h-full flex flex-col items-center '>
            <h1 className='text-5xl pt-8'>Bienvenido Martin!</h1>
            <div className='w-full h-full'>
                <StickerGrid/>
            </div>
        </div>
    );
}

export default Page;

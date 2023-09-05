import React from 'react';
import Link from 'next/link';
import {BsCartFill} from '../node_modules/react-icons/bs'

const CartAndAbout = () => {
    return (
        <div className='h-screen fixed right-0 flex py-7 w-1/12'>
            <Link href={'/store/cart'}>
                <BsCartFill size={'40px'} fill="#ffde59"/>
            </Link>
        </div>
    );
}

export default CartAndAbout;

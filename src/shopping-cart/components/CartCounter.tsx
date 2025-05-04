'use client';
import { useState } from 'react';

interface CartCounterProps {
    value?: number
}

const CartCounter = ({ value = 10 }: CartCounterProps) => {
    const [count, setCount] = useState(value);

    return (
        <>
            <span className='text-9xl'> {count} </span>

            <div className='flex'>
                <button
                    onClick={() => setCount(count + 1)}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2'>
                    +1
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2'>
                    -1
                </button>
            </div>
        </>
    )
}

export default CartCounter
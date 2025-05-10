'use client';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { addOne, initCounterState, substractOne } from '@/app/store/counter/counterSlice';
import { useEffect } from 'react';

interface CartCounterProps {
    value?: number
}

export interface CounterResponse {
    count: number,
}

const getApiCounter = async(): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json());

    return data as CounterResponse;
}

const CartCounter = ({ value = 10 }: CartCounterProps) => {
    
    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(initCounterState(value));
    // }, [dispatch, value])
    
    useEffect(() => {
        getApiCounter()
            .then(({count}) => dispatch(initCounterState(count)))
    }, [dispatch])
    

    return (
        <>
            <span className='text-9xl'> {count} </span>

            <div className='flex'>
                <button
                    onClick={() => dispatch(addOne()) }
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2'>
                    +1
                </button>
                <button
                    onClick={() => dispatch(substractOne()) }
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2'>
                    -1
                </button>
            </div>
        </>
    )
}

export default CartCounter
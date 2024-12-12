import React from 'react'
import Dollar from '@/assets/images/dicepages/usdCoin.svg'

const Manual : React.FC = () => {
  return (
    <>
       <div className='space-y-1'>
                <label className='text-white text-nowrap text-xs'>Bet Amount</label>
                <div className='flex items-center justify-between py-2 px-1 bg-rake_grey-700 rounded-lg'>
                    <input
                        type="text"
                        className='bg-rake_grey-700 outline-none rounded-sm text-white border-none w-full flex-1 mr-2'
                    />
                    <img
                        src={Dollar}
                        alt="dollar"
                        className='h-4 mr-2'
                    />
                    <div className='flex space-x-1'>
                        <button className='rounded-xl cursor-pointer bg-rake_grey-500 border-none py-2 px-3 text-sm'>1/2</button>
                        <button className='rounded-xl cursor-pointer bg-rake_grey-500 border-none py-2 px-3 text-sm'>2x</button>
                    </div>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='w-full flex items-center justify-between'>
                    <div className='text-nowrap text-xs'>Profit on Win</div>
                    <div className='text-xs'>$0.00</div>
                </div>
                <div className='flex items-center justify-between py-3 bg-rake_grey-700 rounded-lg'>
                    <input type="text" className='bg-rake_grey-700 outline-none rounded-sm text-white border-none w-full flex-1 mr-2' />
                    <img  src={Dollar}
                    alt="dollar" className='h-4 mr-2' />
                </div>
            </div>
    </>
  )
}

export default Manual
import React from 'react'
import InteractiveSlider from '../InteractiveSlider'
import { casinosection } from './constant'
import { playicon } from '@/assets/images/casinolobby'

const RakeOriginals: React.FC = () => {
  return (
    <>
      <InteractiveSlider
        topicdata={[casinosection[0]]}
        count={1}
        cardclasses='h-52 transform bg-cover bg-center transition-transform duration-300 hover:-translate-y-4 lg:h-56'
        icon={playicon}
        carouselclasses="mt-4"
        showiconclasses='inset-0 hidden items-center justify-center text-center group-hover:flex'
        cardimageclasses='https://assets.rake.com/dice/img/Rectangle%201dice_game.svg'
        cardhoverclasses='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-25'
        carouselitemclasses='basis-40 pl-1 md:basis-1/4 lg:basis-1/6 xl:basis-48 '
        livesectionclassess='hidden'
        carouselbuttonclasses='hidden'
      />
    </>
  )
}

export default RakeOriginals
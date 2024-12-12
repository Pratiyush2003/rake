import { playicon } from '@/assets/images/casinolobby'
import { UseSelector } from 'react-redux'
import { RootState } from '@/store'
import { useFetchGames } from '@/hooks/useFetchgames'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const GamesCard = () => {
  const [category, setCategory] = useState<string | undefined>("live");
  const [providerId, setProviderId] = useState<string | undefined>();
  const [page, setPage] = useState<number>(1);
  const [size] = useState<number>(10);

  useFetchGames(category, providerId, page, size)
  const {games, loading, error} = useSelector((state : RootState) => state.gamelist);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <>
     <div className="filters">
        <button onClick={() => setCategory("slots")}>Slots</button>
        <button onClick={() => setCategory("roulette")}>Roulette</button>
        <button onClick={() => setCategory("dice")}>Dice</button>
      </div>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.thumbnail} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.category}</p>
          </div>
        ))}
      </div>
    {/* <div>
       <div className='flex flex-wrap w-full gap-4 mt-6 pr-16'>
         {Array.from({ length: 7 }).map((_, index) =>
           <div key={index}
            className={`relative w-24 h-36 md:w-40 md:h-52 transform bg-cover bg-center transition-transform duration-300 hover:-translate-y-2 lg:h-56 rounded-md group`}
            style={{
                backgroundImage: `url("https://cdn.softswiss.net/i/s3/pragmaticexternal/5FrozenCharmsMegaways.png")`,
              }}
            >
              <div
                className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-25`}
              />
              <div className='relative flex h-full items-center justify-center'>
                <span className={`inset-0 hidden items-center justify-center text-center group-hover:flex`}>
                  <img
                    src={playicon}
                    alt='Play icon'
                    className='select-none'
                  />
                </span>
              </div>
            </div>
          )}
        </div>
      </div> */}
      </>
  )
}

export default GamesCard
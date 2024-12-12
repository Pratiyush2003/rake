import SwipperCarousel from '@/components/SwipperCarousel';
import LiveWins from '@/components/casinosuites/LiveWins';
import Livecasino from '@/components/casinosuites/Livecasino';
import SearchInput_Button from '@/components/casinosuites';
import Lobby from '@/components/casinosuites/Lobby';
import { useParams, useSearchParams } from 'react-router-dom';
import RakeOriginals from '@/components/casinosuites/RakeOriginals';
import Favourites from '@/components/casinosuites/Favourites';
import Recents from '@/components/casinosuites/Recents';
import { useState } from 'react';

const CasinoSuites = () => {
  const { pages } = useParams();
  const [clicked, setClicked] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const casinoTab = searchParams.get('casino-tabs');

  const getContent = () => {
    if (casinoTab) {
      switch (casinoTab) {
        case 'lobby':
          return <Lobby />;
        default:
          return null;
      }
    }

    if (pages) {
      switch (pages) {
        case 'live':
          return <Livecasino />;
        case 'favourites':
          return <Favourites />;
        case 'recents':
          return <Recents />;
        case 'originals':
          return <RakeOriginals />;
        case 'shows':
          return null;
        default:
          return null;
      }
    }

    return null;
  };

  const content = getContent();

  return (
    <>
      <div className='w-full space-y-4 p-2 lg:p-10'>
        <div className='w-full'>
          <SwipperCarousel />
        </div>
        <div>
          <LiveWins />
        </div>
        <div>
          <SearchInput_Button
            pages={casinoTab || pages}
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
        <div className={clicked ? 'opacity-45' : undefined}>{content}</div>
      </div>
    </>
  );
};

export default CasinoSuites;

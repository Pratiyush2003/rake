import GamesCard from '../GamesCard';
import { spadesIcon } from '@/assets/images/casinolobby';

const Recents = () => {
  const flag = true;
  return (
    <div className='relative w-full'>
      <div className='flex items-center gap-2'>
        <img src={spadesIcon} alt={spadesIcon} className='h-7' />
        <h4 className='select-none text-2xl'>Recents</h4>
        <h6 className='cursor-pointer text-sm text-rake_blue-500'>See all</h6>
      </div>
      {flag ? (
        <GamesCard />
      ) : (
        <div className='mt-4 text-sm text-rake_grey-300'>
          <div>No Recent Games</div>
          <div>
            Your recently played games will appear here. Start spinning,
            winning, and they'll stay right here for your next visit!
          </div>
        </div>
      )}
    </div>
  );
};

export default Recents;

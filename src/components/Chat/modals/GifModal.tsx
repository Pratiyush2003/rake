import { FC, memo, useContext, useEffect, useState } from 'react';
import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager,
} from '@giphy/react-components';
import { gifKey } from '../constants';
import './modals.css';
import { Loader } from '@/components/CommonComponents';

interface GifModalProps {
  handleGifSelect?: (gifUrl: string) => void;
}

const GifModal: FC<GifModalProps> = ({ handleGifSelect }) => {
  const [isLoading, setIsLoading] = useState(true);
  const Components = () => {
    const { fetchGifs, searchKey, isFetching } = useContext(SearchContext);
    useEffect(() => {
      const fetchInitialGifs = async () => {
        await fetchGifs(15);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      };

      fetchInitialGifs();
    }, [fetchGifs]);

    useEffect(() => {
      if (!isFetching) {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }, [isFetching]);

    if (isLoading) {
      return (
        <div className='loader flex h-[328px] w-full items-center justify-center'>
          <Loader />
        </div>
      );
    }
    return (
      <div className='gif-main flex h-[328px] flex-col'>
        <div className='mb-2'>
          <SearchBar
            className='search-bar-no-icon gif-input no-search-icon mb-[14px] box-border !h-auto w-[93%]
              min-w-[87%] !rounded-[10px] border border-gray-300 !bg-[#04141e] px-[9px]
              py-[7px]'
            placeholder='Search for GIFs'
          />
        </div>
        <Grid
          key={searchKey}
          fetchGifs={fetchGifs}
          width={320}
          className='git-image-main h-[283px] overflow-y-auto'
          columns={4}
          gutter={8}
          onGifClick={(gif, e) => {
            e.preventDefault();
            e.stopPropagation();
            handleGifSelect?.(gif?.images?.original?.url);
          }}
        />
      </div>
    );
  };

  return (
    <SearchContextManager apiKey={gifKey}>
      <div className='mx-auto w-full max-w-lg rounded-lg bg-transparent p-0'>
        <Components />
      </div>
    </SearchContextManager>
  );
};

export default memo(GifModal);

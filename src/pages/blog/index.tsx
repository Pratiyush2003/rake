import BlogTypes from '@/components/Blog/BlogTypes';
import BlogsSection from '@/components/Blog/BlogsSection';
import { blogs } from '@/components/Blog/constants';
import { blogTypes } from '@/components/Blog/constants';
import { Button } from '@/components/ui/button';
import BlogsPagination from '@/components/Blog/BlogsPagination';

export default function index() {
  return (
    <div className='mx-auto w-full max-w-[1160px] p-10'>
      <h3 className='w-full uppercase leading-9'>Blog</h3>
      <div
        className='relative mt-8 rounded-[10px] bg-rake_grey-500
          bg-[url(@/assets/images/blog/blog-shadow.svg)] bg-cover bg-center bg-no-repeat
          px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-16'
      >
        <div className='font-mulish text-[40px] font-extrabold leading-[44px]'>
          Bitcoin: A Top Pick for Online Gambling at Rake.com
        </div>
        <div className='mt-5 max-w-[579px] text-sm font-normal leading-6'>
          Bitcoin has a market capitalization of $836.4 Billion with a
          circulating supply of $19.6 Million. The coin’s trend over the years
          has made it reach a significantly low level of volatility, making it
          significantly safe and reliable. Below are some of the reasons why
          Bitcoin remains our top pick for online gambling at Rake.com:
        </div>
        <div className='mt-6 flex max-w-[868px] flex-wrap gap-2'>
          {blogTypes.map((blogType) => (
            <Button
              key={blogType.name}
              variant='ghost'
              size='md'
              className='bg-rake_grey-750 px-2'
            >
              <div className='flex items-center justify-between'>
                <img className='h-9 w-9' src={blogType.icon} alt='blog-image' />
                <span className='font-mulish text-xs font-bold capitalize leading-[18px] text-white'>
                  {blogType.name}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <BlogTypes blogTypes={blogTypes} />
      <BlogsSection blogs={blogs} />
      {/* Pagination */}
      <div className='mt-8'>
        <BlogsPagination />
      </div>
    </div>
  );
}

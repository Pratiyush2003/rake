import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type BlogType = {
  name: string;
  icon: string;
  category: string;
};

const BlogTypes: FC<{ blogTypes: BlogType[] }> = memo(({ blogTypes }) => {
  return (
    <div
      className='mt-9 grid grid-cols-1 gap-3 rounded-[10px] bg-rake_grey-500 p-7 max-md:px-4
        max-md:py-3 md:grid-cols-2 md:gap-6'
      role='button'
    >
      {blogTypes.map((blogType) => (
        <Link
          to={`/blog/${blogType.category}`}
          className='no-underline'
          key={blogType.name}
        >
          <div
            className='group flex cursor-pointer flex-wrap items-center gap-3 rounded-[10px]
              bg-rake_background-500 p-5 no-underline transition-all duration-500
              hover:bg-rake_grey-450 max-md:px-3 max-md:py-2'
          >
            <img
              className='transition-all duration-500 group-hover:scale-105 max-md:w-[50px]'
              src={blogType.icon}
              alt='tutorialIcon'
            />

            <div className='font-mulish text-2xl font-extrabold leading-8 text-white'>
              {blogType.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
});

export default BlogTypes;

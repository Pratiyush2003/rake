import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Blog = {
  title: string;
  subtitle: string;
  image: string;
  category : string;
  id : number
};

const BlogsSection: FC<{ blogs: Blog[] }> = memo(({ blogs }) => {

  return (
    <div className='mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-2'>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className='hover:bg-rake_grey-450 group block cursor-pointer overflow-hidden rounded-[10px]
            bg-rake_grey-500 p-7 transition-colors duration-300'
          role='button'
        >
          <div className='w-full overflow-hidden'>
            <Link to={`/blog/${blog.category}/${blog.id}`}>
              <img
                className='h-full w-full scale-100 object-cover transition-all duration-500
                group-hover:scale-105'
                src={blog.image}
                alt='blog-image'
              />
            </Link>
          </div>
          <div
            className='mt-4 overflow-hidden text-ellipsis text-nowrap text-center font-inter text-lg
              font-bold leading-6'
          >
            {blog.title}
          </div>
          <div
            className='text-rake_grey-250 mt-4 overflow-hidden text-ellipsis whitespace-nowrap
              text-base font-medium leading-5'
          >
            {blog.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
});

export default BlogsSection;

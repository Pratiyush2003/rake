import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Blog = {
  title: string;
  subtitle: string;
  image: string;
  category: string;
  id: number;
};

const BlogsCategories: FC<{ blogs: Blog[] }> = memo(({ blogs }) => {
  return (
    <>
      <div className='flex h-full max-w-4xl flex-wrap'>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className='mr-3 mt-3 w-full sm:w-1/3 lg:h-96 lg:w-96'
          >
            <div
              className='group block cursor-pointer overflow-hidden rounded-[10px] bg-rake_grey-500 p-7
                transition-colors duration-300 hover:bg-rake_grey-450'
            >
              <div className='w-full overflow-hidden'>
                <Link to={`/blog/${blog.category}/${blog.id}`}>
                  <img
                    className='h-full w-full scale-100 object-cover transition-all duration-500
                      group-hover:scale-105'
                    src={blog.image}
                    alt={`${blog.title} image`}
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
                className='mt-4 overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium
                  leading-5 text-rake_grey-250'
              >
                {blog.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

export default BlogsCategories;

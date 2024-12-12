import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Blog = {
    title: string;
    subtitle: string;
    image: string;
    category: string;
    id: number
};

const PopularArticle: FC<{ blogs: Blog[] }> = memo(({ blogs }) => {

    return (
        <>
            <h6 className='text-xl'>Popular Article</h6>

            <div className='max-w-4xl flex flex-wrap h-full'>
                {blogs.map((blog, index) => (
                    <div key={index} className='mr-3 mt-3 w-full sm:w-1/3 lg:w-96 lg:h-96 '> 
                        <div className='hover:bg-rake_grey-450 group block cursor-pointer overflow-hidden rounded-[10px] bg-rake_grey-500 p-7 transition-colors duration-300'>
                            <div className='w-full overflow-hidden'>
                                <Link to={`/blog/${blog.category}/${blog.id}`}>
                                    <img
                                        className='h-full w-full scale-100 object-cover transition-all duration-500 group-hover:scale-105'
                                        src={blog.image}
                                        alt={`${blog.title} image`}
                                    />
                                </Link>
                            </div>
                            <div className='mt-4 overflow-hidden text-ellipsis text-nowrap text-center font-inter text-lg font-bold leading-6'>
                                {blog.title}
                            </div>
                            <div className='text-rake_grey-250 mt-4 overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium leading-5'>
                                {blog.subtitle}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
});

export default PopularArticle;


import { useParams } from 'react-router-dom';
import { blogs } from '@/components/Blog/constants';
import BlogsCategories from '@/components/Blog/BlogsCategories';
import BlogsPagination from '@/components/Blog/BlogsPagination';

const BlogCategory = () => {
  const { category } = useParams();
  const filterBlogs = blogs.filter((ele) => ele.category === category);

  return (
    <section className='bg-rake_background-500 p-10'>
      <h1 className='text-3xl capitalize'>{category}</h1>
      {filterBlogs.length > 0 ? (
        <BlogsCategories blogs={filterBlogs} />
      ) : (
        <p className='text-center text-4xl font-bold'>No blogs found</p>
      )}
      <div className='mt-8'>
        <BlogsPagination />
      </div>
    </section>
  );
};

export default BlogCategory;

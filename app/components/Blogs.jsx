import React from 'react';
import BlogContainer from './BlogContainer';
import Footer from './Footer';

const Blogs = ({ posts }) => {

  return (
    <div className='max-sm:w-[90vw] h-[100vw] mt-10'>
      <h1 className='font-bold text-3xl my-3'>
        Blog Posts
      </h1>
      <div>
        {posts.map(post => (
          <BlogContainer key={post._id} post={post} />
        ))}
      </div>
      <div className="md:hidden">
      <Footer/>

      </div>
    </div>
  );
}

export default Blogs;

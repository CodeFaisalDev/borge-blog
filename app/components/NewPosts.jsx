import React from 'react';
import NewPostContainer from './NewPostContainer';

const NewPosts = ({ posts }) => {
  return (
    <div className='mt-10 pl-10'>
      <h1 className='font-bold text-3xl my-3'>
        New Blogs
      </h1>
      <div>
        {posts.map(post => (
          <NewPostContainer key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default NewPosts;

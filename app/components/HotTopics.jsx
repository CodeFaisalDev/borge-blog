import React from 'react';
import HotTopicsContainer from './HotTopicsContainer';

const HotTopics = ({ posts }) => {
  // console.log("Hot Topics", posts);
  return (
    <div className='mt-10 pl-10'>
      <h1 className='font-bold text-3xl my-3'>Hot Topics</h1>
      <div>
        {posts.map(post => (
          <HotTopicsContainer key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HotTopics;

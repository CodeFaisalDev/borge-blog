import React from 'react'
import MoreBlogsContent from './MoreBlogsContent'

const MoreBlogs = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl my-3'>More Blogs</h1>
        <div className='grid grid-cols-5'>
            <MoreBlogsContent />
        </div>
    </div>
  )
}

export default MoreBlogs
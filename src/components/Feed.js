import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className='w-[50%] border border-black-200'>
      <div>
        <CreatePost/>
        <Tweet/>
      </div>
    </div>
  )
}

export default Feed

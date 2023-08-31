import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import person6 from '../assets/p6.jpeg'
import person5 from '../assets/p5.jpeg'
import person4 from '../assets/p4.jpeg'
import person3 from '../assets/p3.jpeg'
import person2 from '../assets/p2.jpeg'
import person1 from '../assets/p1.jpeg'
import post1 from '../assets/post1.jpeg'
import post2 from '../assets/post2.jpeg'
import post3 from '../assets/post3.jpeg'
import post4 from '../assets/post4.jpeg'

export default function PostFeeds() {
  const posts = [
    {
        author: "Laju Ojiguo",
        authorLocation: "Los Angeles, Carlifornia",
        authorProfilePic: person6,
        postDetail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, odio?",
        postImage: post1,
        likes: 408,
        comments: 290
    },
    {
        author: "Winning Jolomi",
        authorLocation: "North Hampton, UK",
        authorProfilePic: person5,
        postDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis accusamus, quod pariatur eveniet iusto.",
        postImage: post2,
        likes: 3511,
        comments: 202
    },
    {
        author: "Mummy Winning",
        authorLocation: "Melbourne, Australia",
        authorProfilePic: person4,
        postDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis accusamus, quod pariatur eveniet iusto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis accusamus, quod pariatur eveniet iusto.",
        postImage: post3,
        likes: 800,
        comments: 2
    },
    {
        author: "Laju Ojiguo",
        authorLocation: "Los Angeles, Carlifornia",
        authorProfilePic: person3,
        postDetail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, odio?",
        postImage: post4,
        likes: 3,
        comments: 400
    },
    {
        author: "Winning Jolomi",
        authorLocation: "North Hampton, UK",
        authorProfilePic: person2,
        postDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis accusamus, quod pariatur eveniet iusto.",
        postImage: post1,
        likes: 3,
        comments: 20
    },
    {
        author: "Mummy Winning",
        authorLocation: "Melbourne, Australia",
        authorProfilePic: person1,
        postDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis accusamus, quod pariatur eveniet iusto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis accusamus, quod pariatur eveniet iusto.",
        postImage: post2,
        likes: 15,
        comments: 72
    },
  ] 
  

  return (
    <main className='md:col-span-2 z-10 relative'>
      <div className="space-y-6 w-full">
        <div className="sticky top-[120px] md:top-[135px] z-10">
          <CreatePost />
        </div>
        
        <ul id='postFeedTop' className='grid gap-6 justify-center'>
          {
            posts.map((post, index)=> {
              return <Post key={index}  postImage={post.postImage} comments={post.comments}  likes={post.likes} postDetail={post.postDetail} author={post.author} authorProfilePic={post.authorProfilePic} />
            })
          }
        </ul>
        
      </div>
    </main>
  )
}

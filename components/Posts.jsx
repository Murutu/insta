import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'majid',
    userImg: '/peter.png',
    img: 'https://bit.ly/3CoD0B7',
    caption: 'Sankt, PeterBurg-Russia',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts

import Post from "./Post"


export default function ListPosts({ posts }) {
    return (
        <>
            <h2 className='heading'>Blog</h2>

            <div className='blog'>
                {
                    posts.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </div>
        </>
    )
}

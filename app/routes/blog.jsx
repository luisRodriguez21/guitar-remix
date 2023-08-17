import { Outlet, useLoaderData } from '@remix-run/react'
import Post from '../components/Post'
import styles from '~/styles/blog.css'
import { getPosts } from '~/api/posts.server'


export function meta() {
    return [
        {
            title: `GuitarLA - Nuestro Blog`
        }
    ]
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: styles
		}
	]
}

export async function loader() {
	const posts = await getPosts()
	console.log("posts: ", posts);

	return posts.data
}



function Blog() {
	const posts = useLoaderData()
	console.log("posts: ", posts);

	return (
		<main className="contenedor">
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
		</main>
	)
}

export default Blog
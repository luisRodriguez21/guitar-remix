import { useLoaderData } from '@remix-run/react'
import ListGuitarras from '../components/ListGuitarras';
import ListPosts from '../components/ListPosts';
import Curso from '../components/Curso';
import { getGuitarras } from '~/api/guitarras.server'
import { getPosts } from '~/api/posts.server'
import { getCurso } from '~/api/curso.server'
import stylesGuitarras from '~/styles/guitarras.css';
import stylesBlogs from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

export async function loader(){
	const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()])


	console.log("curso: ",curso);
	
	return {
		guitarras: guitarras.data,
		posts: posts.data,
		curso: curso.data
	}
}

export function links() {
	return[
		{
			rel: 'stylesheet',
			href: stylesGuitarras
		},
		{
			rel: 'stylesheet',
			href: stylesBlogs
		},
		{
			rel: 'stylesheet',
			href: stylesCurso
		}
	]
}

export function meta(){
	return [
		{ title: "GuitarLA - Inicio" },
		{ name: "description", content: "Bienvenido!" },
	];
};


export default function Index() {
	const {guitarras, posts, curso} = useLoaderData()
	console.log("guitarras", guitarras);
	console.log("posts", posts);
	console.log("curso", curso);


	return (
		<>
			<main className="contenedor">
				
				<ListGuitarras 
					guitarras={guitarras} 
				/>

			</main>

			<>
				<Curso 
					curso={curso.attributes}
				/>
			</>

			<section className="contenedor">
				
				<ListPosts 
					posts={posts} 
				/>

			</section>
		</>
	);
}

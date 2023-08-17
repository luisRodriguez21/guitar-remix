import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../api/guitarras.server";
import Guitarra from "../components/Guitarra";
import styles from '~/styles/guitarras.css';

export function links() {
	return[
		{
			rel: 'stylesheet',
			href: styles
		}
	]
}

export async function loader(){
	const resultado = await getGuitarras()
	return resultado.data
}


export default function Tienda() {
	const guitarras = useLoaderData()
	console.log("guitarras: ", guitarras);


	return (
		<main className="contenedor">
			<h2 className="heading">Nuestra coleccion</h2>


			{
				guitarras.length && (
					<div className="guitarras-grid">
						{
							guitarras.map(guitarra => (
								<Guitarra 
									key={guitarra.id}
									guitarra={guitarra}
								/>
							))
						}
					</div>
				)
			}

		</main>
	);
}

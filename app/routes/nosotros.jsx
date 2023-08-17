import { useOutletContext } from '@remix-run/react';
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function links() {
	return[
		{
			rel: 'stylesheet',
			href: styles
		},
		{
			rel: 'preload',
			href: imagen,
			as: 'imagen'
		}
	]
}

export const meta = () => {
	return [
		{ title: "GuitarLA - Nosotros" }
	];
};

export default function Nosotros() {	

	return (
		<main className="contenedor nosotros">
			<h2 className="heading">Desde nosotros</h2>

			<div className="contenido">
				<img src={imagen} alt="imagen nosotros" />

				<div className="">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>

			</div>

		</main>
	);
}

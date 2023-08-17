import { useState } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
	Link
} from "@remix-run/react";
import Header from "~/components/Header"
import Footer from "~/components/Footer";
import styles from '~/styles/index.css'


export const links = () => {
	return[
		{
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin : "true"
        }, 
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
		{
			rel: 'stylesheet',
			href: styles
		}
	]
}

export const meta = () => {
	return [
		{ title: "GuitarLA - Remix" },
		{ charset: 'utf-8' },
		{ viewport: "width=device-width,initial-scale=1" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};


export default function App() {
	const [carrito, setCarrito] = useState([])

	const agregarCarrito = (guitarra) => {
		console.log("agregando... ",guitarra);

		if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
			const carritoActualizado = carrito.map(guitarraState => {
				if(guitarraState.id === guitarra.id){
					guitarraState.cantidad = guitarra.cantidad
				}

				return guitarraState
			})
			
			setCarrito(carritoActualizado)
		} else {
			setCarrito([...carrito, guitarra])
		}

	}


	const actualizarCantidad = (guitarra) => {
		console.log("actualizarCantidad.. ",guitarra);

		const carritoActualizado = carrito.map(guitarraState => {
			if(guitarraState.id === guitarra.id){
				guitarraState.cantidad = guitarra.cantidad
			}

			return guitarraState
		})

		setCarrito(carritoActualizado)
	}

	const eliminarGuitarra = (id) => {
		console.log("eliminarGuitarra.. ",id);

		const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
		setCarrito(carritoActualizado)
	}


	return (
		<Document>
			<Outlet 
				context={{
					agregarCarrito,
					carrito,
					actualizarCantidad,
					eliminarGuitarra
				}}
			/>	
		</Document>
	);
}

function Document({ children }) {
	return(
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				{children}
				<Scripts />
				<LiveReload />
				<Footer />

			</body>
		</html>
	)
}


/** Manejo de errores */
export function CatchBoundary() {
    const error = useCatch()
	console.log("CatchBoundary|error: " ,error);
    return (
        <Document>
            <p className='error'>ERROR</p>
            <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}) {
	console.log("ErrorBoundary|error: " ,error);

    return (
        <Document>
            <p className='error'>ERROR</p>
            <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
        </Document>
    )
}
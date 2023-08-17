import Guitarra from "./Guitarra"


export default function ListGuitarras({ guitarras }) {
    return (
        <>  
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
        </>
    )
}

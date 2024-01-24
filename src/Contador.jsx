import { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(1)

    const Sumar = () => {
        setContador(contador + 1);
    }

        const Restar = () => {
            setContador(contador - 1);
        }

            return (
                <div>
                    <h2>El contador esta en {contador }</h2>
                    <button onClick={Sumar}>+</button>
                    <button onClick={Restar}>-</button>

                </div>
            )
        }

export default Contador

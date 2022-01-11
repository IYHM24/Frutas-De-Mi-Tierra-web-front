import React from 'react'
import '../../css/principal.css'

export const Jumbotron = () => {
    return (
        <div
            className="p-5 text-center bg-image animate__animated animate__fadeIn"
            id="img"
        >
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3 text-dark"><strong>Bienvenido a frutas de mi tierra</strong></h1>
                        <h4 className="mb-3 text-dark">frutas traidas directamente del campo</h4>
                        <a className="btn btn-outline-dark btn-lg" href="#!" role="button"
                        >descargar app</a
                        >
                    </div>
                </div>
            </div>
        </div>
    )
}

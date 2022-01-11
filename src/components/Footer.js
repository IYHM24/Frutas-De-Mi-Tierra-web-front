import React from 'react'
import '../css/footer.css'

export const Footer = () => {
    return (
        <footer className="bg-warning text-dark p-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2"><strong>Frutas De Mi Tierra</strong></h2>
                            <p><i>"Directamente del campo a tu mesa, sin intermediarios"</i></p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a href="/"><span className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="/"><span className="icon-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="/"><span className="icon-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md border-start border-dark">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Menu</h2>
                            <ul className="list-unstyled">
                                <li><a href="/" className="py-2 d-block">Shop</a></li>
                                <li><a href="/" className="py-2 d-block">Nosotros</a></li>
                                <li><a href="/" className="py-2 d-block">Noticias</a></li>
                                <li><a href="/" className="py-2 d-block">Contactanos</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 border-start border-dark">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Help</h2>
                            <div className="d-flex">
                                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <li><a href="/" className="py-2 d-block">Informacion de venta</a></li>
                                    <li><a href="/" className="py-2 d-block">Devoluciones &amp; cambios</a></li>
                                    <li><a href="/" className="py-2 d-block">Terminos &amp; condiciones</a></li>
                                    <li><a href="/" className="py-2 d-block">Politica de privacidad</a></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><a href="/" className="py-2 d-block">FAQs</a></li>
                                    <li><a href="/" className="py-2 d-block">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md border-start border-dark">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">¿Alguna pregunta?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain
                                        View, San Francisco, California, USA</span></li>
                                    <li><a href="/"><span className="icon icon-phone"></span><span className="text">+57 305 7643
                                        395</span></a></li>
                                    <li><a href="/"><span className="icon icon-envelope"></span><span
                                        className="text">frutasdemitierra@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center border-start border-dark"></div>
                </div>
            </div>
        </footer>
    )
}

import React from 'react'
import '../../css/imgs.css'

export const OurService = () => {
    return (
        <section class="container my-5 d-flex justify-content-center flex-wrap">
            <div class="mw-25 mx-1 my-2 p-2" data-aos="zoom-in" data-aos-once="true">
                <div className="container d-flex justify-content-center p-5">
                    <img src='assets/fresco.png' alt="error" width="80px" />
                </div>
                <div class="container text-center">
                    <h5><strong>Productos Frescos</strong></h5>
                    <p>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>
            </div>
            <div class="mw-25 mx-1 my-2 p-2" data-aos="zoom-in" data-aos-once="true">
                <div className="container d-flex justify-content-center p-5">
                    <img src='assets/envio-gratis.png' alt="error" width="80px" />
                </div>
                <div class="container text-center">
                    <h5><strong>Envio gratis</strong></h5>
                    <p>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>

            </div>
            <div class="mw-25 mx-1 my-2 p-2" data-aos="zoom-in" data-aos-once="true">
                <div className="container d-flex justify-content-center p-5">
                    <img src='assets/beneficios.png' alt="error" width="80px" />
                </div>
                <div class="container text-center">
                    <h5><strong>Economia</strong></h5>
                    <p>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>
            </div>
            <div class="mw-25 mx-1 my-2 p-2" data-aos="zoom-in" data-aos-once="true">
                <div className="container d-flex justify-content-center p-5">
                    <img src='assets/tiempo-rapido.png' alt="error" width="80px" />
                </div>
                <div class="container text-center">
                    <h5><strong>Entregas rapidas</strong></h5>
                    <p>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>
            </div>
        </section>)
}
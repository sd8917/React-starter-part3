import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-white" style=
        {
            {"background-color" : "#45637d"}
        }>

            <div className="container p-4">

                <section className="">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    className="shadow-1-strong rounded"
                                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                    title="YouTube video"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>
    );
}

export default Footer;
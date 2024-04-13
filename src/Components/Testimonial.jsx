import React from 'react'
import './Testimonial.css'
import cardImg from '../../Assets/Images/photo_1.jpg'
export default function () {
    return (
        <>

            <div className="container-fluid section3">
                <div className="container p-4">
                    <p style={{color:"#ED232A",fontWeight:"700"}} className="h5 ">Testimonial</p>
                    <p className="card-text fs-2"><span style={{fontWeight: "light" , color: "black"}} >What our</span> <span style={{color: "#1877F2"}}> <b>customer say about us? </b></span></p>
                </div>
                <div className="container team-member">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card  main-card">
                                <img src={cardImg} className="rounded-circle circle-image " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title "> Ajay Kumar</h5>
                                    <svg width="90" height="25" viewBox="0 0 128 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.825 22.9277L7.45 15.9027L2 11.1777L9.2 10.5527L12 3.92773L14.8 10.5527L22 11.1777L16.55 15.9027L18.175 22.9277L12 19.2027L5.825 22.9277Z" fill="#FF5732" />
                                        <path d="M31.825 22.9277L33.45 15.9027L28 11.1777L35.2 10.5527L38 3.92773L40.8 10.5527L48 11.1777L42.55 15.9027L44.175 22.9277L38 19.2027L31.825 22.9277Z" fill="#FF5732" />
                                        <path d="M57.825 22.9277L59.45 15.9027L54 11.1777L61.2 10.5527L64 3.92773L66.8 10.5527L74 11.1777L68.55 15.9027L70.175 22.9277L64 19.2027L57.825 22.9277Z" fill="#FF5732" />
                                        <path d="M84.5784 21.8893L85.9371 16.0154L86.005 15.7221L85.7775 15.5249L81.22 11.5737L87.2432 11.0509L87.5433 11.0248L87.6606 10.7474L90 5.21209L92.3394 10.7474L92.4567 11.0248L92.7568 11.0509L98.78 11.5737L94.2225 15.5249L93.995 15.7221L94.0629 16.0154L95.4216 21.8893L90.2583 18.7746L90 18.6188L89.7417 18.7746L84.5784 21.8893Z" fill="#FF5732" stroke="#FF5732" />
                                        <path d="M110.578 21.8893L111.937 16.0154L112.005 15.7221L111.778 15.5249L107.22 11.5737L113.243 11.0509L113.543 11.0248L113.661 10.7474L116 5.21209L118.339 10.7474L118.457 11.0248L118.757 11.0509L124.78 11.5737L120.222 15.5249L119.995 15.7221L120.063 16.0154L121.422 21.8893L116.258 18.7746L116 18.6188L115.742 18.7746L110.578 21.8893Z" fill="#FF5732" stroke="#FF5732" />
                                    </svg>
                                    <p className="card-text">I've been using this mutual fund app for some time now, and it is so easy to use. Thanks to its simple interface, monitoring the performance of my portfolio has become super easy.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card  main-card">
                                <img src={cardImg} className="rounded-circle circle-image " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Brajesh Singh</h5>
                                    <svg width="90" height="25" viewBox="0 0 129 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.49297 22.9277L8.11797 15.9027L2.66797 11.1777L9.86797 10.5527L12.668 3.92773L15.468 10.5527L22.668 11.1777L17.218 15.9027L18.843 22.9277L12.668 19.2027L6.49297 22.9277Z" fill="#FF5732" />
                                        <path d="M32.493 22.9277L34.118 15.9027L28.668 11.1777L35.868 10.5527L38.668 3.92773L41.468 10.5527L48.668 11.1777L43.218 15.9027L44.843 22.9277L38.668 19.2027L32.493 22.9277Z" fill="#FF5732" />
                                        <path d="M58.493 22.9277L60.118 15.9027L54.668 11.1777L61.868 10.5527L64.668 3.92773L67.468 10.5527L74.668 11.1777L69.218 15.9027L70.843 22.9277L64.668 19.2027L58.493 22.9277Z" fill="#FF5732" />
                                        <path d="M85.2464 21.8893L86.6051 16.0154L86.6729 15.7221L86.4455 15.5249L81.888 11.5737L87.9112 11.0509L88.2113 11.0248L88.3285 10.7474L90.668 5.21209L93.0074 10.7474L93.1247 11.0248L93.4247 11.0509L99.4479 11.5737L94.8904 15.5249L94.663 15.7221L94.7308 16.0154L96.0896 21.8893L90.9262 18.7746L90.668 18.6188L90.4097 18.7746L85.2464 21.8893Z" stroke="#FF5732" />
                                        <path d="M111.246 21.8893L112.605 16.0154L112.673 15.7221L112.445 15.5249L107.888 11.5737L113.911 11.0509L114.211 11.0248L114.329 10.7474L116.668 5.21209L119.007 10.7474L119.125 11.0248L119.425 11.0509L125.448 11.5737L120.89 15.5249L120.663 15.7221L120.731 16.0154L122.09 21.8893L116.926 18.7746L116.668 18.6188L116.41 18.7746L111.246 21.8893Z" stroke="#FF5732" />
                                    </svg>

                                    <p className="card-text">I've been using this mutual fund app for some time now, and it is so easy to use. Thanks to its simple interface, monitoring the performance of my portfolio has become super easy.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card main-card">
                                <img src={cardImg} className="rounded-circle circle-image " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Vinod sambe</h5>
                                    <svg width="90" height="25" viewBox="0 0 129 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.15703 22.9277L7.78203 15.9027L2.33203 11.1777L9.53203 10.5527L12.332 3.92773L15.132 10.5527L22.332 11.1777L16.882 15.9027L18.507 22.9277L12.332 19.2027L6.15703 22.9277Z" fill="#FF5732" />
                                        <path d="M32.157 22.9277L33.782 15.9027L28.332 11.1777L35.532 10.5527L38.332 3.92773L41.132 10.5527L48.332 11.1777L42.882 15.9027L44.507 22.9277L38.332 19.2027L32.157 22.9277Z" fill="#FF5732" />
                                        <path d="M58.157 22.9277L59.782 15.9027L54.332 11.1777L61.532 10.5527L64.332 3.92773L67.132 10.5527L74.332 11.1777L68.882 15.9027L70.507 22.9277L64.332 19.2027L58.157 22.9277Z" fill="#FF5732" />
                                        <path d="M84.9104 21.8893L86.2692 16.0154L86.337 15.7221L86.1096 15.5249L81.5521 11.5737L87.5753 11.0509L87.8753 11.0248L87.9926 10.7474L90.332 5.21209L92.6715 10.7474L92.7887 11.0248L93.0888 11.0509L99.112 11.5737L94.5545 15.5249L94.3271 15.7221L94.3949 16.0154L95.7536 21.8893L90.5903 18.7746L90.332 18.6188L90.0738 18.7746L84.9104 21.8893Z" fill="#FF5732" stroke="#FF5732" />
                                        <path d="M110.91 21.8893L112.269 16.0154L112.337 15.7221L112.11 15.5249L107.552 11.5737L113.575 11.0509L113.875 11.0248L113.993 10.7474L116.332 5.21209L118.671 10.7474L118.789 11.0248L119.089 11.0509L125.112 11.5737L120.554 15.5249L120.327 15.7221L120.395 16.0154L121.754 21.8893L116.59 18.7746L116.332 18.6188L116.074 18.7746L110.91 21.8893Z" stroke="#FF5732" />
                                    </svg>

                                    <p className="card-text">I've been using this mutual fund app for some time now, and it is so easy to use. Thanks to its simple interface, monitoring the performance of my portfolio has become super easy.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

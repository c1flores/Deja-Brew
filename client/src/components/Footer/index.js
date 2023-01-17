import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Footer } from 'react-bootstrap'


function Footer(props) {
    return (
        <Footer className="page-footer font-small brown pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h4 className="text-uppercase">text</h4>
                    <p> space holder text</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/> 
            </div>
        </Footer> 
    )
}


export default Footer;
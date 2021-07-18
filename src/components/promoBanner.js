import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import LearnM from '../homepageIMG/promoBannerIMGs/LearnM.png';
import signUp from '../homepageIMG/promoBannerIMGs/signUp.png';


import babyBanner from '../homepageIMG/promoBannerIMGs/babyBanner.png';

import "../componentsCSS/promoBanner.css";




export default function PromoBanner() {
    return (
        <div>
            <Container maxWidth="xl">
                <div className="promoBanner">
                    {/* 
            <div className="promoPic"> */}
         <img className="babyImage" src={babyBanner} alt="this is baby" />
                    <div className="promoText">
                        <h1>Prepare young minds for a better <span style={{ color: "#42C0F6" }}>future.</span></h1>
                        <br />
                        <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
                        <br /><br/>
                        {/* <Button
                                variant="outlined"
                                color="primary"
                                style={{
                                    position: "relative",
                                    top: "20px",
                                    left: "20%",
                                    height: "20px",
                                    width: "150px",
                                }}>
                                LEARN MORE
                        </Button>
                    
                        <Button
                                variant="contained"
                                color="secondary"
                                style={{
                                    
                                    position: "relative",
                                    top: "20px",
                                    left: "30%",
                                    height: "20px",
                                    width: "150px",
                                }}>
                                SIGN UP
                        </Button> */}
                        <Button style={{ height: "10%", width: "50%" }}> <img src={LearnM}  style={{ height: "45px" }} /></Button>
                        <Button style={{ height: "10%", width: "50%" }} > <img src={signUp} style={{ height: "45px" }} /></Button>
                        <h6 className="subtext">*Basic subscription includes the first 15 projects <span style={{fontWeight:"800"}}>free </span>of charge.</h6>


                    </div>

           
                    {/* </div> */}

                </div>
            </Container>
        </div>
    )
}
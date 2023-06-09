import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import {
  getAuth,
} from 'firebase/auth';
import { getFirebaseConfig } from '../firebase-config';

interface FooterProp {
    scrollUp: () => void
}

export default function Footer({scrollUp}:FooterProp) {
    const navigate = useNavigate();

    function isUserSignedIn() {
        return !!getAuth().currentUser;
    }

    return (
        <div className="bg-black pt-5">
            <Container className="bg-black">
                <div className="d-flex justify-content-between align-items-center" style={{borderBottom: "2px solid white"}}>
                    <h3 className="text-white"><span id='logoFirst'>Code</span><span id='logoSecond' className='fw-light'>Pilot</span></h3>
                    <div onClick={scrollUp} className="d-flex align-items-center" style={{cursor: "pointer"}}>
                        <h5 className="text-white">Return to top</h5>
                        <h5><i className="fa-solid fa-arrow-up text-white ms-2"></i></h5>
                    </div>
                </div>
                <Stack gap={4} className="mt-5 mb-4">
                    <Nav.Link onClick={() => {
                        if(isUserSignedIn()) {
                            navigate("/editor")
                        } else {
                            navigate("/logIn")
                        }
                    }} style={{textDecoration: "none"}} 
                    className='fs-5 me-4 text-white'>Playground</Nav.Link>
                    <Nav.Link href="#action2" className='fs-5 me-4 text-white'>Github</Nav.Link>
                    <Nav.Link href="#action2" className='fs-5 text-white'>Suggestion</Nav.Link>
                </Stack>
                <div className="mt-5 mb-3" style={{height: "2px", background: "white"}}></div>
            </Container>
            <div className="d-flex justify-content-center align-items-center pb-3" style={{width: "100vw", textAlign: "center"}}>
                <i className="fa-solid fa-copyright text-white fs-4 me-2"></i>
                <span className="text-white">Copyright 2023 CodePilot</span>
            </div>
        </div>
    )
}


const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
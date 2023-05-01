import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";

const SignatureWrapper = styled.div`
    padding: 0 0 .5rem 0;
    font-size: .87rem;
    opacity: .4;
`;

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;

    >a {
        margin-right: 10px;
        font-size: 1.5rem;
    }
`;

const Footer = () => {
    return (
        <footer>
            <Container>
                <hr />
                <Row>
                    <Col>
                        <Row><h5>Contact</h5></Row>
                        <Row className='py-n3'><p><i className='fas fa-phone'></i>: +233 20 904 4823</p></Row>
                        <Row className='mt-n3'><p><i className='fas fa-envelope'></i>: <a href='mailto:ananses3mwear@gmail.com'>anansesm@gmail.com</a></p></Row>
                    </Col>
                </Row>
                <Row className='mt-n2'>
                    <SocialWrapper>
                        <a href="https://www.facebook.com/search/top?q=ananses3m%20wear" target="_blank" rel="noreferrer"><i className='fab fa-facebook-square'></i></a>
                        <a href="https://www.instagram.com/ananses3mwear/?hl=en" target="_blank" rel="noreferrer"><i className='fab fa-instagram'></i></a>
                        <a href="https://twitter.com/ananses3mwear?lang=en" target="_blank" rel="noreferrer"><i className='fab fa-twitter-square'></i></a>
                    </SocialWrapper>
                </Row>
                <Row className='text-center'>
                    <SignatureWrapper><h6>Copyright &copy; Anansesɛm | Developed by Kwaku Appau-Nkansah</h6></SignatureWrapper>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer

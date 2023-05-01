import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import LineMenu from './LineMenu';

const ServicesMainWrapper = styled.div`
    // background: #343A40;
    padding: 3vw 0px 3vw 0px;
`;

const ServicesContentWrapper = styled.div``;

const Services = () => {
    return (
        <ServicesMainWrapper>
                <Container>
                    <ServicesContentWrapper>
                        <LineMenu />
                    </ServicesContentWrapper>
                </Container>
        </ServicesMainWrapper>
    )
}

export default Services

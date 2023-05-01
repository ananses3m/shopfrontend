import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
// import breakpoint from '../breakpoints';
import AffiliatesMenu from './AffiliatesMenu';

const AffiliatesMainWrapper = styled.div`
    padding: 3vw 0px 3vw 0px;
`;

const AffiliatesContentWrapper = styled.div``;

const Affiliates = () => {
    return (
        <AffiliatesMainWrapper>
                <Container>
                    <AffiliatesContentWrapper>
                        <AffiliatesMenu />
                    </AffiliatesContentWrapper>
                </Container>
        </AffiliatesMainWrapper>
    )
}

export default Affiliates

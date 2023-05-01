import React from 'react';
import '../index.css';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import breakpoint from '../breakpoints';
import blackgirlImage from '../profileImages/blackgirl.jpg';
import blackboyImage from '../profileImages/blackboy.jpg';

const TabContent = styled.p`
    @media only screen and ${breakpoint.device.xs}{
        font-size: .9rem;
    }
`;

const AboutPicWrapper = styled.div`
    max-width: 200px;
    margin: 0 0 0 2vw;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and ${breakpoint.device.sm}{
        flex-direction: column-reverse;
    }
`;

const AboutTextWrapper = styled.div`
    // Present for flex property reasons
`;

const ImageWrapper = styled.img`
    height: auto;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.123), 0 0 6px rgba(0, 0, 0, 0.151);

    // filter: grayscale(100%);

    &:hover {
        filter: none;
    }

    @media only screen and ${breakpoint.device.sm}{
        max-width: 60%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

const AffiliatesMenu = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <TabContent><h5>Black Girl</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Black Boy</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Pink Boy</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Pink Girl</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Rainbow</h5></TabContent>
                </Tab>
            </TabList>

            <TabPanel>
                    <MainWrapper>
                        <AboutTextWrapper>
                            <h1>The text and link here</h1>
                        </AboutTextWrapper>
                        <AboutPicWrapper>
                            <ImageWrapper src={blackgirlImage} alt="Black Girl Picture" />
                        </AboutPicWrapper>
                    </MainWrapper>
            </TabPanel>
            <TabPanel>
                    <MainWrapper>
                        <AboutTextWrapper>
                            <h1>Some cool text and link here</h1>
                        </AboutTextWrapper>
                        <AboutPicWrapper>
                            <ImageWrapper src={blackboyImage} alt="Black Boy Picture" />
                        </AboutPicWrapper>
                    </MainWrapper>
            </TabPanel>
            <TabPanel>
                    <MainWrapper>
                        <AboutTextWrapper>
                            <h1>Shege Pink text and link here</h1>
                        </AboutTextWrapper>
                        <AboutPicWrapper>
                            <ImageWrapper src={blackgirlImage} alt="Black Girl Picture" />
                        </AboutPicWrapper>
                    </MainWrapper>
            </TabPanel>
            <TabPanel>
                    <MainWrapper>
                        <AboutTextWrapper>
                            <h1>The text and link here</h1>
                        </AboutTextWrapper>
                        <AboutPicWrapper>
                            <ImageWrapper src={blackboyImage} alt="Black Boy Picture" />
                        </AboutPicWrapper>
                    </MainWrapper>
            </TabPanel>
            <TabPanel>
                    <MainWrapper>
                        <AboutTextWrapper>
                            <h1>The text and link here</h1>
                        </AboutTextWrapper>
                        <AboutPicWrapper>
                            <ImageWrapper src={blackgirlImage} alt="Black Girl Picture" />
                        </AboutPicWrapper>
                    </MainWrapper>
            </TabPanel>
        </Tabs>
    );
}



export default AffiliatesMenu;

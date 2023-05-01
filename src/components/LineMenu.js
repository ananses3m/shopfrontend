import React from 'react';
import '../index.css';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import breakpoint from '../breakpoints';

const PanelContent = styled.div``;

const TabContent = styled.p`
    @media only screen and ${breakpoint.device.xs}{
        font-size: .9rem;
    }
`;

const LineMenu = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <TabContent><h5>Graphic Design</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Paper Bags</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Screen Printing</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Other Printing</h5></TabContent>
                </Tab>
                <Tab>
                    <TabContent><h5>Others</h5></TabContent>
                </Tab>
                {/* <Tab>
                    <TabContent>Rogmoth</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Volunteer</TabContent>
                </Tab> */}
            </TabList>

            <TabPanel>
                <PanelContent>
                    <h1>Designs here</h1>
                    {/* <FlexSim /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <h1>Content here</h1>
                    {/* <LDSChurch /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <h1>Designs Prints here</h1>
                    {/* <BuildingFit /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <h1>Designs Images here</h1>
                    {/* <BYUIAudio /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <h1>Designs Works here</h1>
                    {/* <ExcessEra /> */}
                </PanelContent>
            </TabPanel>
            {/* <TabPanel> */}
                {/* <PanelContent> */}
                    {/* <Rogmoth /> */}
                {/* </PanelContent> */}
            {/* </TabPanel> */}
            {/* <TabPanel> */}
                {/* <PanelContent> */}
                    {/* <Volunteer /> */}
                {/* </PanelContent> */}
            {/* </TabPanel> */}
        </Tabs>
    );
}



export default LineMenu;

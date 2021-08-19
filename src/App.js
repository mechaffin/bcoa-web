import {
  AppBar,
  Container,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { CONSTANTS, useGlobalStyles } from "theme";
import React, { useState } from "react";

import { About } from "content/About";
import { FAQ } from "content/FAQ";
import { HonorRoll } from "components/HonorRoll";
import { Intro } from "content/Intro";
import { TabPanel } from "components/TabPanel";
import { useData } from "hooks/useData";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function App() {
  const globalClasses = useGlobalStyles();
  const data = useData();

  const [tab, setTab] = useState(0);
  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };
  return (
    <Container classes={{ root: globalClasses.container }} maxWidth={false}>
      <Typography variant="h1">BCOA Versatile Basenji Program</Typography>

      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Introduction" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab
            label={
              <Link
                title="Versatility Application"
                href={`${CONSTANTS.path.application}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Application
              </Link>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <Intro />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <FAQ />
      </TabPanel>

      <HonorRoll {...data} />
    </Container>
  );
}

export default App;

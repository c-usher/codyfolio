import React, { useState } from "react";
import "./navigation.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box } from "@material-ui/core";
import About from "../../Pages/About/About";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Contact from "../../Pages/Contact/Contact";

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box p={3}>{children}</Box>}</div>;
}

function LinkTab(props) {
  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} className="nav-bar">
        <LinkTab label="ABOUT" />
        <LinkTab label="PORTFOLIO" />
        <LinkTab label="CONTACT" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Portfolio />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel>
    </div>
  );
}

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Password from "./Password";
import { Iaccount } from "../../types/account";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          { children }
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Iprops {
  message: string;
  handleLoginSubmit(username:string,password:string):void;
}

const TabPanels:React.FC<Iprops> = ({
  message,
  handleLoginSubmit
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        marginTop: 8, 
        backgroundColor: "background.paper",
        borderRadius: 1,
        padding: 1
        }}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="tabs"
            variant="fullWidth"
          >
            <Tab label="用户名密码登录" {...a11yProps(0)} />
            <Tab label="token 登录" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Password 
            message={message}
            handleLoginSubmit={handleLoginSubmit}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          access token
        </TabPanel>
      </Box>
    </Container>
  );
}

export default TabPanels
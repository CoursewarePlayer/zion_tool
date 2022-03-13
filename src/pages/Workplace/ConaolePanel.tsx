import React, { useState } from 'react';
import {
  Box,
  Collapse,
  Paper,
  TextField,
  List,
  ListItem,
  Grid,
  Divider,
  Typography
} from '@mui/material';

interface Iprops {
  inputArgs:any;
  outputValues:any;
}

export default function Debugger(props:Iprops) {
  const [open, setOpen] = useState(false);
  const { inputArgs, outputValues } = props;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Collapse
      sx={{
        zIndex: 10000, 
        backgroundColor: "#282c34",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
      }}
      in={open}
      collapsedSize={30}
      // orientation="horizontal"
    >
      <Paper sx={{ backgroundColor: "#282c34" }}>
        <Box 
          onClick={toggleDrawer(!open)}
          sx={{
            // backgroundColor: "#333842",
            height: 30,
            cursor: "pointer",
            borderTop: "1px solid #555"
          }}
        >
          <Box sx={{
              width: 30,
              height: 6,
              backgroundColor: "#aaa",
              borderRadius: 3,
              position: 'absolute',
              top: 8,
              left: 'calc(50% - 15px)'
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
            minHeight: 200,
            p: 2
          }}
          noValidate
          autoComplete="off"
        >
          {/* <Grid container>
            <Grid item xs={5}>
              <List
                subheader={
                  <Typography sx={{mb: 2}} variant='h6' color='primary.light'>
                    input
                  </Typography>
                }
              >
                <ListItem>
                  <TextField
                    label="Name <string>"
                    color="info"
                    size="small"
                    fullWidth={true}
                  />
                </ListItem>
              </List>
            </Grid>

            <Divider sx={{backgroundColor: 'primary.light'}} orientation="vertical" variant="middle" flexItem />

            <Grid item xs={5}>
              <List>
                <ListItem>
                  <TextField
                    // id="outlined-name"
                    // variant='filled'
                    label="Name"
                    color="info"
                    sx={{
                      color: 'red',
                      // backgroundColor: '#d5d7de'
                    }}
                    // value={name}
                    // onChange={handleChange}
                  />
                </ListItem>
              </List>
            </Grid>


            
          </Grid> */}
        </Box>
      </Paper>
    </Collapse>
  );
}
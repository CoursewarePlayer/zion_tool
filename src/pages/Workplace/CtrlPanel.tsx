import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Paper,
  Chip
} from '@mui/material';

interface Iprops {
  inputArgs:any;
  outputValues:any;
}

export default function CtrlPanel(props:Iprops) {

  const { inputArgs, outputValues } = props;

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        width: '100%',
        backgroundColor: 'primary.main',
        position: 'absolute',
        top: 0,
        bottom: 0
      }}
    >
      <List
        subheader={
          <Typography variant='body2' sx={{
            backgroundColor: 'secondary.light',
            color: 'text.secondary',
            pl: 1,
            fontSize: 8
          }}>
            input
          </Typography>
        }
        sx={{
          height: "50%",
        }}
      >
        <Box sx={{overflow: 'scroll',height: "100%",}}>
          { Object.keys(inputArgs).map((item:any, index:number) => (
              <ListItem key={index} sx={{m: 0, pl: 1, pb: 0}}>
                <ListItemText
                  primary={item}
                  secondary={inputArgs[item].type}
                  primaryTypographyProps={{
                    color: 'text.secondary',
                    fontSize: 8
                  }}
                  secondaryTypographyProps={{
                    color: 'text.disabled',
                    fontSize: 6
                  }}
                  sx={{m:0}}
                />
              </ListItem>
            ))
          }
        </Box>
      </List>

      <List
        subheader={
          <Typography variant='body2' sx={{
            backgroundColor: 'secondary.light',
            color: 'text.secondary',
            pl: 1,
            fontSize: 8
          }}>
            output
          </Typography>
        }
        sx={{
          height: "50%",
        }}
      >
        <Box sx={{overflow: 'scroll',height: "100%",}}>
          { Object.keys(outputValues).map((item:any, index:number) => (
              <ListItem key={index} sx={{m: 0, pl: 1, pb: 0}}>
                <ListItemText
                  primary={item}
                  secondary={outputValues[item].type}
                  primaryTypographyProps={{
                    color: 'text.secondary',
                    fontSize: 8
                  }}
                  secondaryTypographyProps={{
                    color: 'text.disabled',
                    fontSize: 6
                  }}
                  sx={{m:0}}
                />
              </ListItem>
            ))
          }
        </Box>
      </List>

      
    </Paper>
  )
}

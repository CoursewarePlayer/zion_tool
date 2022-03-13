import React, { useState } from 'react';
import {
  Grid,
  Paper,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Divider,
  Collapse,
  Box,
  Typography,
  Button,
  ButtonGroup
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import Editor from './Editor';
import ActionSelect from './ActionSelect';

interface Iprops {
  actionFlows: any;
}

export default function ActionFlow(props:Iprops) {
  const { actionFlows } = props
  const [open, setOpen] = useState("01");
  const [actionArgs, setActionArgs] = useState({
    inputArgs: {},
    outputValues: {},
    uniqueId: "",
    versionId: "",
    allNodes: [{code: ""}],
    displayName: ""
  });

  const Item = (actionFlow:any, index:number) =>  {

    const {
      inputArgs,
      outputValues,
      uniqueId,
      versionId,
      displayName,
      allNodes
    } = actionFlow;

    const handleActionflowClick = ((code:string, key:number) => {
      setActionArgs({
        inputArgs,
        outputValues,
        uniqueId,
        versionId,
        allNodes,
        displayName
      })
      setOpen(String(key) + "1");
    })

    return (
    <React.Fragment key={index}>
      <ListItemButton onClick={e => handleActionflowClick(allNodes[0].code, index)}>
        <ListItemText primary={actionFlow.displayName} sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap"
        }}/>
        {open === String(index) + "1" ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open === String(index) + "1"}>
        3333
      </Collapse>
    </React.Fragment>
  )}

  return (
    <Grid container wrap="nowrap" spacing={0} sx={{
      height: "100%",
      maxHeight: 800,
      overflow: "hidden",
      minWidth: 1000, 
      width: "100%",
      }}
      >
      <Grid item xs={2}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: "100%",
            backgroundColor: 'primary.main',
            p: 1
          }}
        >
          <List
            sx={{ width: '100%', maxWidth: 360, color: 'text.secondary' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ActionSelect />
            }
          >
            { actionFlows 
              ? actionFlows.map((item:any, index:number) =>  Item(item, index))
              : <React.Fragment />
            }
          </List>
        </Paper>
      </Grid>

      <Grid item xs={10}>
        <Paper
          sx={{
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            height: "100%",
            overflow: "hidden",
            position: "relative",
            backgroundColor: '#282c34'
          }}
        >
          <Editor actionArgs={actionArgs}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

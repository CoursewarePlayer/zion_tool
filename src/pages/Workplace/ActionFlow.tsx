import React, { useState } from 'react';
import {
  Grid,
  Paper,
  List,
  Box
} from '@mui/material';
import Editor from './Editor';
import ActionSelect from './ActionSelect';
import ActionDetail from './ActionDetail';

interface Iprops {
  actionFlows: any;
  webhooks: any[];
  handleWebhookUpload(variables:any, 
    callBackuniqueId:string, 
    parameters:string, 
    actionFlowUniqueId:string
    ):void;
}

export default function ActionFlow(props:Iprops) {
  const { actionFlows, handleWebhookUpload, webhooks } = props
  const [open, setOpen] = useState('00');
  const [actionArgs, setActionArgs] = useState({
    inputArgs: {},
    outputValues: {},
    uniqueId: "",
    versionId: "",
    allNodes: [{code: ""}],
    displayName: ""
  });


  const handleActionflowClick = ((actionFlow:any, key:number) => {
    
    const {
      inputArgs,
      outputValues,
      uniqueId,
      versionId,
      displayName,
      allNodes
    } = actionFlow;
    
    setActionArgs({
      inputArgs,
      outputValues,
      uniqueId,
      versionId,
      allNodes,
      displayName
    });
    setOpen(String(key) + "1");
  })

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
            p: 1.5
          }}
        >
          <List
            sx={{ 
              width: '100%',
              maxWidth: 360, 
              color: 'text.secondary',
              height: '100%'
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ActionSelect />
            }
          >
            <Box sx={{height: '100%', overflow: 'scroll'}}>
              { actionFlows 
                ? actionFlows.map((actionFlow:any, index:number) => 
                  <ActionDetail 
                    actionFlow={actionFlow}
                    webhooks={webhooks}
                    index={index}
                    key={index}
                    open={open}
                    handleActionflowClick={handleActionflowClick}
                    handleWebhookUpload={handleWebhookUpload}
                  />)
                : <React.Fragment />
              }
            </Box>
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

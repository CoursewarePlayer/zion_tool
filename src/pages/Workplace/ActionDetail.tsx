import React, {useState} from 'react';
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  ListItemText,
  ListItem,
  Collapse,
  Divider
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const parametersGen = (inputArg:Object) => {
  const defaultValues = {
    INTEGER: 0,
    TEXT: '',
    ARRAY: ''
  }

  let parameters = new Object();

  Object.keys(inputArg).map((item:string, index:number) => {
    // @ts-ignore
    parameters[item] = defaultValues[inputArg[item]['type']];
  })
  return JSON.stringify(parameters);

}

interface Iprops {
  index: number;
  open: string;
  actionFlow: any;
  webhooks: any[];
  handleActionflowClick(code:string, index:number):void;
  handleWebhookUpload(
    variables:any, 
    callBackuniqueId:string, 
    parameters:string, 
    actionFlowUniqueId:string
    ):void;
}

const check = (actionFlow:any, webhooks:any[]) => {
  for (let i = 0; i < webhooks.length; i++) {
    if (actionFlow.uniqueId === webhooks[i].actionFlowUniqueId) {
      return { result: true, webhook: webhooks[i]};
    }
  }
  return { result: false};
}

export default function OutlinedCard(props:Iprops) {
  const { 
    actionFlow, 
    handleActionflowClick,
    handleWebhookUpload,
    open, 
    index,
    webhooks
  } = props;
  const [callbackInfo, setCallback] = useState('');

  const {
    inputArgs,
    outputValues,
    uniqueId,
    versionId,
    displayName,
    allNodes
  } = actionFlow;
  const isClicked = open === String(index) + '1';
  const hasWebhook = check(actionFlow, webhooks);

  console.log(hasWebhook);

  const handleButtonClick = () => {
    const callBackuniqueId = uuidv4();
    const callbackConfig = [{
      'uniqueId': callBackuniqueId,
      // 'parameters': [
      //   {
      //   'location': 'BODY',
      //   'name': '',
      //   'required': false,
      //   'schema': {
      //     'type': 'string'
      //   }
      // }
    // ],
      'actions':  [
        {
          'actionFlowUniqueId': uniqueId,
          'version': versionId              
        }]
    }]
    ;
    handleWebhookUpload(
      callbackConfig, 
      callBackuniqueId, 
      parametersGen(inputArgs), 
      uniqueId
      );
  }

  return (
    <Box>
      <Collapse in={isClicked} collapsedSize={40}>

        <ListItem
          onClick={e => handleActionflowClick(actionFlow, index)}
          sx={{
            backgroundColor: isClicked ? '#282c34' : '',
            cursor: 'pointer'
          }}
        >
          <ListItemText primary={displayName} sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}/>
          {isClicked ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Card sx={{backgroundColor: '#eee'}} variant='outlined'>
          <CardContent sx={{backgroundColor: '#eee'}}>
            <Typography variant='h6'>
              Details
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              version: {versionId}
            </Typography>
            <Typography variant='body2' sx={{ mb: 1.5 }}>
              unique id: {uniqueId}
            </Typography>
            <Divider sx={{mb: 2, mt: 2}}/>
            <Typography variant='h6' sx={{fontSize: 20}}>
              Webhook Config
            </Typography>
            <Typography variant='body2' sx={{ mb: 1.5 }}>
              {callbackInfo}
            </Typography>
            {
              hasWebhook.result 
              ? <Typography variant='body2' sx={{ mb: 1.5 }}>
                  <strong>url: </strong>{hasWebhook.webhook.url}
                  <br />
                  <strong>param: </strong>{hasWebhook.webhook.parameters}
                </Typography>
              : <Button 
                  size='small' 
                  variant='outlined' 
                  fullWidth={true}
                  onClick={handleButtonClick}
                  >
                  ADD TO WEBHOOK
                </Button>
            }
            
          </CardContent>
        </Card>
      </Collapse>
    </Box>
  );
}

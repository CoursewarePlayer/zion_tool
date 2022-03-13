import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { 
  javascript,
  esLint
} from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import ConaolePanel from './ConaolePanel';
import CtrlPanel from './CtrlPanel';
import {
  Box,
  Typography,
  Grid
} from '@mui/material';

interface Iprops {
  actionArgs: {
    inputArgs: any;
    outputValues: any;
    uniqueId: string;
    versionId: string;
    allNodes: any;
    displayName: string;
  }
}

export default function App(props:Iprops) {
  const { actionArgs } = props;
  const { 
    allNodes, 
    versionId, 
    displayName,
    inputArgs,
    outputValues
  } = actionArgs;

  const code = allNodes[0].code;
  return (
    <Box>
      <Box 
        sx={{
          borderBottom: "1px solid #131417",
        }}
      >
        <Typography 
          variant='body2' 
          align='center'
          sx={{
            textAlign: 'center',
            height: '50px',
            lineHeight: '50px',
            color: "#aaa",
            fontSize: 8
          }}
        > 
          {`${displayName} - v${versionId}`} 
        </Typography>
      </Box>
      <Grid container sx={{
        position: 'absolute',
        bottom: 0,
        top: 51,
        left: 0,
        right: 0
      }}>

        <Grid item xs={10} sx={{posiiton: "relative", height: '100%'}}>
          <CodeMirror
            value={code}
            height="100%"
            extensions={[
              javascript({ jsx: true }),
            ]}
            theme={oneDark}
            style={{
              position: "relative",
              height: "100%",
              overflow: "scroll",
              left: 0,
              right: 0,
              fontSize: 10,
              fontFamily: 'Consolas, Courier New, monospace'
            }}
          />
        </Grid>

        <Grid item xs={2}>
          <CtrlPanel 
            inputArgs={inputArgs}
            outputValues={outputValues}
          />
        </Grid>

      </Grid>
      
      <ConaolePanel 
        inputArgs={inputArgs}
        outputValues={outputValues}
      />
    </Box>
   
  );
}

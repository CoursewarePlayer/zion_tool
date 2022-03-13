import React, { useState } from 'react';
import { Iproject } from '../../types/project';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Workplace from './Workplace';
import { USER_LOGIN } from "../../graphql/queries";
import { Store } from '../../reducers';
import { setPageIndexAction } from '../../reducers/pages';
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_PROJECT_DETAIL_BY_EXID } from '../../graphql/queries'; 
import { SYNC_CALLBACK_CONFIGS } from '../../graphql/syncCallbackConfigs';

type webhook = {
  url: string;
  parameters: string;
  actionFlowUniqueId: string
}

interface Iprops {
  project:Iproject;
  updatePageIdx(idx:number):void;
}

const Index:React.FC<Iprops> = ({
  project
}) => {
  const [webhooks, setWebhooks] = useState<webhook[]>([]);
  const [uploadCallback, result] = useMutation(SYNC_CALLBACK_CONFIGS);
  const {data, loading, error} = useQuery(FETCH_PROJECT_DETAIL_BY_EXID, {
    variables: {
      projectExId: project.exId
    }
  })

  if (loading) return <div>loading</div>
  if (error) return <div>error</div>
  console.log(data)
  const {
    lastUploadedSchema,
    projectName,
    deploymentEnvConfigs,
    zeroUrl,
    exId
  } = data.project;

  const { actionFlows } = lastUploadedSchema.appSchema;
  const deploymentEnvExid = deploymentEnvConfigs[0].exId;

  const callbackUrlGen = (uuid:string) => {
    const strArr = zeroUrl.split('/');
    strArr[0] = 'https:/';
    strArr[strArr.length-2] = 'callback';
    strArr[strArr.length-1] = uuid;
    return strArr.join('/');
  }

  const handleWebhookUpload = (
    variables:any, 
    callBackuniqueId:string, 
    parameters:string, 
    actionFlowUniqueId:string
    ) => {
    
    uploadCallback({
      variables: {
        callbackConfigs: variables,
        deploymentEnvConfigExId: deploymentEnvExid
      }
    })
    .then(data => {
      console.log(data);
      setWebhooks([
        ...webhooks,
        {
          url: callbackUrlGen(callBackuniqueId),
          parameters,
          actionFlowUniqueId
        }
      ])
    })
    .catch(err => console.log(err))
  }

  return (
    <Workplace 
      projectName={projectName}
      actionFlows={actionFlows}
      webhooks={webhooks}
      handleWebhookUpload={handleWebhookUpload}
    />
  )
}

const mapStateToProps = (store:Store) => ({
  project: store.project
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  updatePageIdx: (pageIdx:number) => dispatch(setPageIndexAction(pageIdx))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
import {
  gql
} from "@apollo/client";

export const USER_LOGIN = gql `
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
      roleNames
    }
  }
`;

export const GET_ALL_PROJECTS = gql `
  query GetAllProjectsForCurrentUser {
      allProjects {
        exId
        projectName
        collaboratorType
        projectOwner
        lastUploadedSchema {
          createdAt
        }
      }
  }
`;

export const FETCH_PROJECT_DETAIL_BY_EXID = gql `
query FetchProjectDetailsByExId1($projectExId: String!) {
  project(projectExId: $projectExId) {
    ...ProjectDetailsFragment
  }
}
fragment ProjectDetailsFragment on Project {
  projectName
  collaboratorType
  schemaExId
  debugScriptUrl
  mobileWebUrl
  customizedMcUrl
  customizedMcPath
  customizedMcToken
  customizedMcDefaultPassword
  adminToken
  managementConsoleUrl(
    deploymentEnvConfigName: "production"
    userDeploymentEnvironment: PRODUCTION
  )
  zeroUrl
  zeroSubscriptionUrl
  lastUploadedSchema {
    exId
    appSchema {
      ...AppSchemaFragment
    }
  }
  schemaHistory {
    exId
    createdAt
  }
  hasBindCloudConfiguration
  projectConfig {
    ...ProjectConfigFragment
  }
  ...ProjectStatusFragment
}
fragment AppSchemaFragment on AppSchema {
  wechatRootMRefs
  webRootMRefs
  mobileWebRootMRefs
  mRefMap
  dataModel
  colorTheme
  appConfiguration
  wechatConfiguration
  webConfiguration
  mobileWebConfiguration
  appGlobalSetting {
    appDidLoad
    globalVariableTable
  }
  zedVersion
  remoteApiSchema
  thirdPartyApiConfigs
  functors {
    ...FunctorFragment
  }
  actionFlows {
    ...actionFlowsFragment
  }
  subsystemRecords {
    ...SubsystemFragment
  }
  mcConfiguration {
    userRoles
    menuItems
    objects
    projectLogo
  }
  componentTemplates
}
fragment FunctorFragment on Functor {
  id
  apiVersion
  createdAt
  displayName
  invokeApiName
  type
  uniqueId
  inputSchema
  outputSchema
}
fragment SubsystemFragment on SubsystemRecord {
  exId
  subsystemType
  miscSettings {
    ...MiscSettingFragment
  }
  optionalArgToColumnMappings {
    ...ArgToColumnMappingFragment
  }
  optionalRowToColumnMappings {
    ...RowToColumnMappingFragment
  }
  optionalColumnToColumnMappings {
    ...ColumnToColumnMappingFragment
  }
  requiredTableMappings {
    ...TableMappingFragment
  }
  optionalTableMappings {
    ...TableMappingFragment
  }
  functors {
    type
    displayName
    invokeApiName
    inputSchema
    outputSchema
  }
  enabledPlugins {
    pluginType
    miscSettings {
      ...MiscSettingFragment
    }
    optionalArgToColumnMappings {
      ...ArgToColumnMappingFragment
    }
    optionalRowToColumnMappings {
      ...RowToColumnMappingFragment
    }
    optionalColumnToColumnMappings {
      ...ColumnToColumnMappingFragment
    }
    requiredTableMappings {
      ...TableMappingFragment
    }
    optionalTableMappings {
      ...TableMappingFragment
    }
  }
}
fragment MiscSettingFragment on MiscSetting {
  key
  type
  value
}
fragment ArgToColumnMappingFragment on ArgToColumnMapping {
  name
  type
  sourceKey
  targetColumnId
  targetColumnName
}
fragment ColumnToColumnMappingFragment on ColumnToColumnMapping {
  name
  type
  sourceColumnId
  sourceColumnName
  targetColumnId
  targetColumnName
}
fragment RowToColumnMappingFragment on RowToColumnMapping {
  name
  type
  sourceKey
  targetColumnId
  targetColumnName
}
fragment TableMappingFragment on TableMapping {
  name
  tableName
  columnMappings {
    name
    type
    columnId
    columnName
    optional
  }
}
fragment actionFlowsFragment on ActionFlow {
  uniqueId
  displayName
  inputArgs
  outputValues
  startNodeId
  versionId
  schemaVersion
  allNodes {
    ... on FlowEnd {
      uniqueId
      type
    }
    ... on RunCustomCode {
      type
      uniqueId
      inputArgs
      outputValues
      code
      andThenNodeId
    }
  }
}
fragment ProjectConfigFragment on ProjectConfig {
  wechatAppConfig {
    ...WechatConfigFragment
  }
  hasuraConfig {
    ...HasuraConfigFragment
  }
  aliyunSmsConfig {
    ...SmsConfigFragment
  }
  emailConfig {
    ...EmailConfigFragment
  }
  registerToken
  businessLicenseImageExId
}
fragment HasuraConfigFragment on HasuraConfig {
  rootUrl
  adminSecret
}
fragment WechatConfigFragment on WechatAppConfig {
  wechatAppId
  wechatAppSecret
  hasGrantedThirdPartyAuthorization
  wechatPaymentMerchantId
  wechatPaymentMerchantKey
  wechatPaymentNotifyUrl
}
fragment SmsConfigFragment on AliyunSmsConfig {
  powerOfAttorneyImageExId
  signature {
    description
    signSource
    signature
  }
}
fragment EmailConfigFragment on EmailConfig {
  emailPassword
  emailProvider
  emailSender
}
fragment ProjectStatusFragment on Project {
  exId
  deploymentStatus
  wechatMiniAppLink
  wechatMiniAppQRCodeLink
  wechatMiniAppQRCodeBase64
}
`

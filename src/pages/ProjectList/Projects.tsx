import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../../graphql/queries";
import { Iproject } from '../../types/project';

interface Iprops {
  projects: [Iproject];
  handleProjectClick(projectExid:string):void;
}

export default function Orders(props:Iprops) {
  const { projects, handleProjectClick } = props;

  return (
    <Container sx={{
      padding: 8, 
      backgroundColor: "background.paper", 
      mt: 8,
      borderRadius: 1,
      width: "90%",
      minWidth: 800,
      height: 800,
      overflowY: "scroll"
      }}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>项目名</TableCell>
            <TableCell>创建者</TableCell>
            <TableCell>角色</TableCell>
            <TableCell>创建时间</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{
          maxHeight: 80,
          overflow: "hidden"
        }}>
          {projects.map((project:Iproject, idx:number) => (
              <TableRow 
                key={idx} 
                sx={{cursor: "pointer"}}
                onClick={e => handleProjectClick(project.exId)}
                >
                <TableCell>{project.projectName}</TableCell>
                <TableCell>{project.projectOwner}</TableCell>
                <TableCell>{project.collaboratorType}</TableCell>
                <TableCell>{project.lastUploadedSchema?.createdAt}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Container>
  );
}
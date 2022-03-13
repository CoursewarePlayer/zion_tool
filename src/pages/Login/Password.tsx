import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Iaccount } from '../../types/account';
import { Password } from '@mui/icons-material';

interface Iprops {
  message: string;
  handleLoginSubmit(username:string,password:string):void;
}


const SignIn:React.FC<Iprops> = ({
  message,
  handleLoginSubmit
}) => {

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username')?.toString();
    const password = data.get('password')?.toString();
    if (username && password) handleLoginSubmit(username, password);
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        marginBottom: 2,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          placeholder='用户名'
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          placeholder="密码"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 6, mb: 4 }}
        >
          登录
        </Button>
        <Typography variant="body2" color="text.secondary" align="center">
          { message }
        </Typography>
      </Box>
    </Box>
  );
}

export default SignIn;

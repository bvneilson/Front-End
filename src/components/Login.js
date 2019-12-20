import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <label htmlFor="username">Username: </label>
      <TextField id="standard-basic" type="text" name="username" value={credentials.username} onChange={handleChange} />
      <label htmlFor="password">Password: </label>
      <TextField id="standard-basic" type="text" name="password" value={credentials.password} onChange={handleChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

export default Login;

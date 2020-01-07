import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing(2),
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

  const handleLogin = e => {
    e.preventDefault();

  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField required id="standard-required" type="text" label="Username" name="username" value={credentials.username} onChange={handleChange} />
          </div>
          <div>
            <TextField required id="standard-required" type="text" label="Password" name="password" value={credentials.password} onChange={handleChange} />
          </div>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Log In
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default Login;

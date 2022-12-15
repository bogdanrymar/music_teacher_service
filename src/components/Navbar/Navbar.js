import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Grid } from '@mui/material';
import { Button } from 'reactstrap';
import { LOGIN_ROUTE } from '../../utils/consts';
import { NavLink } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../../index";


const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return(
    <div>
      <AppBar style={{ background: '#17bf9e' }} position="static">
        <Toolbar variant={'dense'}>
          <Grid container justifyContent={"flex-end"}>
            {user ? 
              <Button onClick={() => auth.signOut()} variant={'outlined'} style={{color:"#FFFFFF"}}>Exit</Button>
            :
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={'outlined'} style={{color:"#FFFFFF"}}>Login</Button>
              </NavLink>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import  Typography from '@material-ui/core/Typography';

import Profile from './Profile';
import Compound from './Compound';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Open Fire</Typography>
        </Toolbar>
      </AppBar>

      <Compound/>

      <Profile/>
    </div>
  );
}

export default App;
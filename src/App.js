import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Demo from './pages/Demo';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {ProfileComponent} from './Profile';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Open Fire</Typography>
        </Toolbar>
      </AppBar>
      <Demo />
      <Welcome/>
      <ProfileComponent/>
    </div>
  );
}

export default App;

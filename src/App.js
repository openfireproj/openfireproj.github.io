import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Profile from './Profile';
import Welcome from './Welcome';
import {ProfileComponent} from './components/ProfileComponent';

import Window from './components/Window';

function App() {
  const eqns = Profile.windows('home'); 

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Open FI/RE</Typography>
        </Toolbar>
      </AppBar>
      <Welcome/>
      <ProfileComponent/>
      <Window equations={eqns}/>
    </div>
  );
}

export default App;

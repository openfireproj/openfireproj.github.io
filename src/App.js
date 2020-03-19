import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {ProfileComponent} from './components/ProfileComponent';
import Welcome from './Welcome';

import Window from './components/Window';

function App() {
  const eqns = [
    'endurance',
    'com.mtgprofessor/monthly-payment'
  ]

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

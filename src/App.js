import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {ProfileComponent} from './components/ProfileComponent';
import Welcome from './Welcome';
import Endurance from './components/equations/Endurance';
import {CompoundMaturity} from './components/equations/Compound';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Open Fire</Typography>
        </Toolbar>
      </AppBar>
      <Welcome/>
      <Endurance/>
      <ProfileComponent/>
      <CompoundMaturity/>
    </div>
  );
}

export default App;

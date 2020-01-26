import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {ProfileComponent} from './Profile';
import Welcome from './Welcome';
import Endurance from './eqnComponents/Endurance';
import {CompoundMaturity} from './eqnComponents/Compound';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Open Fire</Typography>
        </Toolbar>
      </AppBar>
      <Welcome/>
      <ProfileComponent/>
      <Endurance/>
      <CompoundMaturity/>
    </div>
  );
}

export default App;

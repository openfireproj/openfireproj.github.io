import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {ProfileComponent} from './components/ProfileComponent';
import Welcome from './Welcome';

import Equation from './components/Equation';

import Endurance from './equations/endurance';
import Monthly from './equations/com.mtgprofessor/monthly';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Open Fire</Typography>
        </Toolbar>
      </AppBar>
      <Welcome/>
      <Equation config={Endurance} />
      <Equation config={Monthly} />
      <ProfileComponent/>
    </div>
  );
}

export default App;

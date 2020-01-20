import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import  Typography from '@material-ui/core/Typography';

import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Open Fire</Typography>
        </Toolbar>
      </AppBar>

      <Portfolio/>
    </div>
  );
}

export default App;

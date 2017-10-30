import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500, pinkA200, red500, grey200} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: cyan500,
  },
  tabs: {
    backgroundColor: red500,
  }
});

export default class First extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Tabs>
          <Tab label="Item One" >
            <div>
              <h2 style={styles.headline}>Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
          <Tab label="Item Two" >
            <div>
              <h2 style={styles.headline}>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="onActive"
            route="/"
            onActive={function() {console.log('active');}}
          >
            <div>
              <h2 style={styles.headline}>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}

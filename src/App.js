import React, { Component } from 'react';
import './App.scss';
import { Button, Content } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './contents/LandingPage';
import RepoPage from './contents/RepoPage';
import { Contents, Theme } from '@carbon/react';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}
export default App;

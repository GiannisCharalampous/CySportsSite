import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import PlayerPostDetails from './components/PlayerPostDetails/PlayerPostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Basketball from "./components/Sports/Basketball/Index";
import Players from "./components/Sports/Basketball/Players/Players";
import Football from "./components/Sports/Football/Index";
import PlayerPosition from "./components/PlayerPosition/PlayerPosition";
import FootballPlayers from "./components/Sports/Football/Players/Players";
import FootballPlayerPostDetails from "./components/FootballPlayerPostDetails/PlayerPostDetails";
import FootballPlayerPosition from "./components/FootballPlayerPosition/PlayerPosition";
import Shop from "./components/Shop/Shop"
import Jackets from "./components/Shop/Jackets"
import Pants from "./components/Shop/Pants"
import T_shirts from "./components/Shop/T_shirts"

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/Jackets" exact component={Jackets} />
          <Route path="/Pants" exact component={Pants} />
          <Route path="/T-shirts" exact component={T_shirts} />
          <Route path="/basketball" exact component={Basketball} />
          <Route path="/basketPlayers" exact component={Players} />
          <Route path="/basketPlayers/:id" exact component={PlayerPostDetails} />
          <Route path={['/positions/:position']} component={PlayerPosition} />
          <Route path="/football" exact component={Football} />
          <Route path="/footballPlayers" exact component={FootballPlayers} />
          <Route path="/footballPlayers/:id" exact component={FootballPlayerPostDetails} />
          <Route path={['/footballPositions/:footballPosition']} component={FootballPlayerPosition} />

        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;

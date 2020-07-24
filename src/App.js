import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'

import routes from './routes'

import './App.scss'

function App() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">CoachFunnels Leads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
      <Router history={createBrowserHistory()}>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index.toString()} />
          ))}
        </Switch>
      </Router>
    </Container>
  )
}

export default App

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Search from './components/search'
import News from './components/news'
import Details from './components/details'
import Header from './components/header'
import Footer from './components/footer'

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={News} exact />
              <Route path="/search" component={Search} exact />
              <Route path="/details/:id" component={Details} exact />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes

import React from 'react'
import { Route, Switch } from 'react-router'

import {HomePage} from '../../modules/homePage'
import {HelloPage} from '../../modules/HelloPage'
import {CounterPage} from '../../modules/counterPage'
import {UsersPage} from '../../modules/usersPage'
import {DetailsUserPage} from '../../modules/detailsUserPage'

import {WrongUrlPage} from '../../modules/WrongUrlPage'

import {TopNavBar} from '../../modules/TopNavBar'

const routes = (
  <div>
    <TopNavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hello" component={HelloPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/user/:id" component={DetailsUserPage} />
      <Route component={WrongUrlPage} />
    </Switch>
  </div>
)

export default routes

import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from "../screens/Dashboard"
import LoginScreen from "../screens/LoginScreen"

const DiaryRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginScreen} exact={true}/>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
)

export default DiaryRouter
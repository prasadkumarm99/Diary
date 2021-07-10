import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import DashboardPage from "../screens/DashboardScreen"
import LoginPage from "../screens/LoginScreen"
import RegisterPage from "../screens/RegisterScreen"
import ComposePage from "../screens/ComposeScreen"

const DiaryRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact={true}/>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/compose/:id" component={ComposePage} />
      </Switch>
  </BrowserRouter>
)

export default DiaryRouter
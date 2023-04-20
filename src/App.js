import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'
// bugs identified are
// 1. Switch component is not wrapped with Routes
// 2. exact key word is not used [+2 bugs]
// 3. while passing path parameters onto the route containing the component colon is missed (:)
// 4. for route to navigate(/team-matches/id) is provided but not for which component i.e TeamMatches
// 5. Switch component is not imported from react-router-dom.
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App

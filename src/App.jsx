import React, { Fragment,useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider  } from 'react-redux';
import store from './store';
import Login from './pages/Login';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import Details from './pages/Details';
import { getNewsSource } from './actions/news';
import { getBookmarkItems } from './actions/bookmarks';

const App = (props) => {
  const [authedtoken, setAuthedToken] = useState('')
    
  useEffect(() => {
   let authToken = sessionStorage.getItem('Auth Token')
   setAuthedToken(authToken)

    store.dispatch(getNewsSource());
    store.dispatch(getBookmarkItems());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            {authedtoken !== null ? (
              <>
                <Route path='/Home' exact component={Home} />
                <Route path='/Home/:newsItemPublishedAt' exact component={Details} />
                <Route path='/bookmarks' exact component={Bookmarks} />
              </>
            ) : (
              <Route path='/' exact component={Login} />
                )}
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import App from './containers/App';
import NotFound from './containers/NotFound';
import configureStore from './store/configureStore';
import DevTools from './utils/DevTools';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
        {(process.env.NODE_ENV === 'production') ? null : <DevTools />}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

export const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}


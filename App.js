import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './apps/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './apps/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;

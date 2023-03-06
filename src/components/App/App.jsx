import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import ContactsBook from 'components/ContactsBook/ContactsBook';

import store from 'redux/store';

// import { store, persistor } from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <ContactsBook />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;

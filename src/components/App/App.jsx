import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ContactsBook from 'components/ContactsBook/ContactsBook';

import store from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ContactsBook />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

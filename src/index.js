import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import  { persistor,store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/command_project_frontend_task_pro">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <App />
      </PersistGate> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

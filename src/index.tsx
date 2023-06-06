import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Webla from './App';
import MyHeader from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiTable from './multiTable';
import SimpleForm from './simple.form.component';
import ReactHookForm from './react.hookform';
import MyCalCulatorApp from './calculator.app';
import { Provider } from 'react-redux';
import appStore from './store';
import UserList from './reducers/user-list.components';
import AddDelCount from './Inc-Dec';
import Wordcounter from './wordcounter';
import Products from './reducers/products';
import ProductsList from './reducers/products';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <App />
  // <Provider store={appStore}>
  //   <BrowserRouter>
  //     <MyHeader />
  //     <Routes>
  //       <Route key={1} path="/" element={<App />}></Route>
  //       <Route key={2} path="/multiTable" element={<MultiTable multiNumber={10} />}></Route>
  //       <Route key={3} path="/simple.form.components" element={<SimpleForm />}></Route>
  //       <Route key={4} path="/react.hookform" element={<ReactHookForm />}></Route>
  //       <Route key={5} path="/user-list" element={<UserList />}></Route>
  //       <Route key={6} path="/Count-incdec" element={<AddDelCount />}></Route>
  //       <Route key={7} path="/wordcounter" element={<Wordcounter />}></Route>
  //       <Route key={8} path="/products" element={<ProductsList />}></Route>
      

        
  //     </Routes>
  //   </BrowserRouter>
  // </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

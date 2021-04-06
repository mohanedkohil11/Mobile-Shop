import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddNewMobile from './pages/AddNewMobile';
import HomePage from './pages/HomePage';
import Header from './reusable/Header';
import './sass/base/globals.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <main >
          <Switch>

            <Route path="/" exact >
              <HomePage />
            </Route>

            <Route path="/add-new-mobile" exact >
              <AddNewMobile />
            </Route>

          </Switch>

        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import Header from '../src/components/Header';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
        <Header />

          {/* TODO: Remove after testing */}
          {/* <ul>
            <li><Link to="/photo">Go to photo page</Link></li>
            <li><Link to="/photo/add">Go to Add new photo page</Link></li>
            <li><Link to="/photo/123">Go to Edit photo page</Link></li>
          </ul> */}

          <Switch>
          {/* mặc định nó sẽ ra component trong redirect */}
            <Redirect exact from="/" to="/photos" /> 
            <Route path="/photos" component={Photo} />

            {/* khi không có đường dẫn hợp lệ,hoặc đường dẫn bị lỗi thì sẽ xuất  ra thằng NotFound*/}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
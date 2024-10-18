import logo from './logo.svg';
import './App.css';

import AuthProvider from './Provider/AuthProvider';
import Routes from './Routes/index';

function App() {
  return (
    <AuthProvider>
    <Routes />
  </AuthProvider>
  );
}

export default App;

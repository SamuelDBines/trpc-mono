// import { useState } from 'react';
// import { trpc } from "./utils/trpc";
import TrpcContext from './context/trpc';
import IndexPage from "./pages";
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (<TrpcContext>
    {"Hey"}
    <IndexPage />
  </TrpcContext>);
}

export default App;

import LandingPage from '@pages/LandingPage';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <LandingPage />
    </>
  );
}

export default App;

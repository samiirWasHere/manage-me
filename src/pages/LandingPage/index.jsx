import InfoBox from '@components/InfoBox';
import React from 'react';

import { toast } from 'react-toastify';

const LandingPage = () => {

  const handleClick = () => {
    notify();
  }

  const notifySuccess = () => toast.success('Payment Success');
  const notifyError = () => toast.error('Payment Error')

  return (
    <>
      <section className="login-area pt-100 pb-100">
        <div className="w-full py-16 pb-28 h-[100vh] relative mb-9 flex flex-col gap-y-20 items-center" onClick={notifyError}>
          <div className="flex flex-col items-center gap-3" onClick={notifySuccess}>
            <h1 className="text-4xl text-rose-500 font-semibold" onClick={notifyError}>Stats Tracking</h1>
            <p className="text-rose-300 text-lg text-center w-4/5 md:w-full lg:w-full xl:w-full" onClick={notifySuccess}>
              All changes and updates made to this template will be logged below.
            </p>
          </div>
          <InfoBox mainText={'V.1'} secondaryText={'Initial Saasup Webflow Template Release'} />
        </div>
      </section>
    </>
  );
};

export default LandingPage;

import React from 'react';
import moneyGuardLogo from '../../images/logo.svg';

export const Logo = () => {
  return (
    <div class="flex flex-col justify-center items-center mb-3">
      <img class="mb-1" src={moneyGuardLogo} alt="Logo" width="35" />
      <h2 class="text-white-cl text-3xl text-center mt-2 font-normal">
        Money Guard
      </h2>
    </div>
  );
};

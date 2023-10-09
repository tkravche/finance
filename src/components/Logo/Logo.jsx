import React from 'react';
import moneyGuardLogo from '../../images/logo.svg';

export const Logo = () => {
  return (
    <>
      <img class="mb-1" src={moneyGuardLogo} alt="Logo" width="35" />
      <h2 class="text-white-cl">Money Guard</h2>
    </>
  );
};

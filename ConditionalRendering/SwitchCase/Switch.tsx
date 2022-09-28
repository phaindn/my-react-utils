import React from 'react';
import { SwitchContext } from './ctx';
import { SwitchProps } from './SwitchCase.types';

const Switch = (props: SwitchProps) => {

  const { var: variable, children } = props;

  return (
    <SwitchContext.Provider value={{ var: variable }}>
      {children}
    </SwitchContext.Provider>
  );
};

export default Switch;



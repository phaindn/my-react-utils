import React from 'react';
import { SwitchContext } from './ctx';
import { CaseProps } from './SwitchCase.types';

const Case = (props: CaseProps) => {
  const { value, children } = props;

  return (
    <SwitchContext.Consumer>
      { (ctx) => {
        if (ctx?.var == value) {
          return children;
        }
        return null;
      }}
    </SwitchContext.Consumer>
  );
};

export default Case;



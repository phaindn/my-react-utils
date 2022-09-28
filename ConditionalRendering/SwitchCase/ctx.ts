import { createContext } from 'react';
import { SwitchCaseType } from './SwitchCase.types';

export interface ISwitchContext {
  var: SwitchCaseType;
}

export const SwitchContext = createContext<ISwitchContext | null>(null);
SwitchContext.displayName = 'Switch-Case';

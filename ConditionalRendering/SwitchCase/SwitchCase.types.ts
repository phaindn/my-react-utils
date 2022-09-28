import { ReactNode } from 'react';

export type SwitchCaseType = boolean|string|number|null;

export interface SwitchProps {
  var: SwitchCaseType;
  children?: JSX.Element|JSX.Element[]|ReactNode|ReactNode[];
}

export interface CaseProps {
  value: SwitchCaseType;
  children?: JSX.Element|JSX.Element[]|ReactNode|ReactNode[];
}

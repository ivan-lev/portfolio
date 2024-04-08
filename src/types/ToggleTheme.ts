import { Dispatch, SetStateAction } from 'react';

export type ToggleTheme = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

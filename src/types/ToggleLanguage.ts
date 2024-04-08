import { Dispatch, SetStateAction } from 'react';

export type ToggleLanguage = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};

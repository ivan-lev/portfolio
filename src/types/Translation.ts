type TranslationElement = {
  [key: string]: string;
};

type TranslationBlock = {
  [key: string]: TranslationElement;
};

export type Translation = {
  [key: string]: TranslationBlock;
};

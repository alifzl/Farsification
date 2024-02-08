import { workspace } from 'vscode';

export const getConfiguration = <T>(key: string) => {
  return workspace.getConfiguration('translatorHelper').get<T>(key);
};

export const getApiConfiguration = () => {
  return getConfiguration<string>('api') ?? 'google';
};

export const getSourceLanguageConfiguration = () => {
  return getConfiguration<string>('sourceLanguage') ?? 'zh-CN';
};

export const getTargetLanguageConfiguration = () => {
  return getConfiguration<string>('targetLanguage') ?? 'fa';
};

export const getEnableSelectionHoverTranslationConfiguration = () => {
  return getConfiguration<boolean>('enableSelectionHoverTranslation') ?? true;
};

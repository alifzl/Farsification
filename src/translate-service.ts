import googleTranslateApi from '@vitalets/google-translate-api';

export interface ITranslatorService {
  translate(text: string, source: string, target: string): Promise<string>;
}

export class GoogleTranslationService implements ITranslatorService {
  async translate(
    text: string,
    source: string,
    target: string
  ): Promise<string> {
    try {
      let result = await googleTranslateApi(text, { from: source, to: target });
      return result.text;
    } catch (error: any) {
      throw error;
    }
  }
}

export class MicrosoftTranslationService implements ITranslatorService {
  translate(text: string, source: string, target: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}

export class TranslationServiceFactory {
  static createServiceInstance(api: string): ITranslatorService {
    switch (api.toLowerCase()) {
      case 'google':
        return new GoogleTranslationService();
      case 'microsoft':
        return new MicrosoftTranslationService();
      default:
        return new GoogleTranslationService();
    }
  }
}

import { Injectable } from '@angular/core';

export enum SupportedLanguages {
  en = 'English',
  fr = 'français',
  es = 'Español'
}

@Injectable()
export class TranslationService {
  private readonly translations 
    = new Map<string, Map<string, string>>([
      ['en', new Map<string, string>([
        ["language", "Language"],
        ["title", "Convert Map Enum to Array Demo"]
      ])],
      ['fr', new Map<string, string>([
        ["language", "Langue"],
        ["title", "Démo Pour Convertir Enum en Array"]
      ])],
      ['es', new Map<string, string>([
        ["language", "Idioma"],
        ["title", "Demostración Para Convertir Enum a Array"]
      ])]
  ]);

  public getTranslation(
    key: string, 
    language: SupportedLanguages = SupportedLanguages.en
  ) {
    return this.translations.get(language).get(key);
  }
}

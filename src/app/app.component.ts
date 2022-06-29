import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SupportedLanguages, TranslationService } from './translation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslationService],
})
export class AppComponent implements OnInit {
  public languages = SupportedLanguages;
  public selectedLanguage: string;
  public languageLabel: string;
  public title: string;
  private _supportedLanguages = Object.keys(SupportedLanguages);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.selectedLanguage = 
        queryParams['lang'] || this.supportedLanguages[0];

      this.title = this.getTranslation('title');
      this.languageLabel = this.getTranslation('language');
    });
  }

  public get supportedLanguages(): Array<string> {
    return this._supportedLanguages;
  }

  public onSelectedLanguageChange(
    language: SupportedLanguages
  ) {
    const queryParams: Params = { lang: language };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams
    });
  }

  private getTranslation(key: string) {
    return this.translationService
                .getTranslation(
                  key, 
                  <SupportedLanguages>this.selectedLanguage
                );
  }
}

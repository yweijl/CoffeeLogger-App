import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { registerIcons } from "../helpers/extensions"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    registerIcons(matIconRegistry, domSanitizer, [
      ['Icons', 'portafilter'],
      ['Icons', 'information'],
      ['Icons', 'beans'],
      ['Icons', 'espresso'],
      ['Icons', 'country'],
    ]);
  }
}

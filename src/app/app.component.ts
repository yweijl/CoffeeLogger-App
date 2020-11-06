import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CoffeeLogger';
  cardImage = '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
  rate = 4;
  
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
      this.registerIcon('Icons','portafilter');
      this.registerIcon('Icons','information');
      this.registerIcon('Icons','beans');
      this.registerIcon('Icons','espresso');
      this.registerIcon('Icons','country');
    }

  private registerIcon(path: string, icon: string){
    this.matIconRegistry.addSvgIcon(
      icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/${path}/${icon}.svg`)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {

  title = 'CoffeeLogger';
  brand = 'IEF & IDO'
  cardImage = '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
  rate = 4;
  bean = 'Arabica';
  country = 'Guatemala'
  cups = 214;
  
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

  ngOnInit(): void {
  }

}

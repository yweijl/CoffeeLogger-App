import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


export function registerIcons(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, svgs:Array<[string, string]>) {
    
    svgs.forEach(svg => {
        matIconRegistry.addSvgIcon(
            svg[1],
            domSanitizer.bypassSecurityTrustResourceUrl(`../assets/${svg[0]}/${svg[1]}.svg`)
        );
    });
}

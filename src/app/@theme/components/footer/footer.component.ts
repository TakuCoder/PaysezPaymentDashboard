import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
   <b><a href="http://www.paysez.com" target="_blank">Paysez</a></b>
    </span>
   
  `,
})
export class FooterComponent {
}

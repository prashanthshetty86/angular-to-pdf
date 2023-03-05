import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <button kendo-button  (click)="pdf.saveAs('sampleSentiMent.pdf')">
      <span class="k-icon k-i-print"></span> Print
      </button>
    </div>

    <kendo-pdf-export #pdf  margin="2cm">
    <area-chart1></area-chart1>
     
     
    </kendo-pdf-export>
  `,
  styles: [
    `
    kendo-pdf-export {
      font-family: "DejaVu Sans", "Arial", sans-serif;
      font-size: 12px;
    }
  `,
  ],
})
export class AppComponent {}

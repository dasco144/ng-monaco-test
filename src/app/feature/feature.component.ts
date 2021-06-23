import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  options = {
    theme: 'vs-light',
    language: 'sql',
    minimap: {
      enabled: false
    },
    scrollBeyondLastLine: false
  };

  code = `
    let helloWorld = 'Hello World';
  `

  constructor() { }

  ngOnInit(): void {
  }

}

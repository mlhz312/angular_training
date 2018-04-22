import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {
  showSecretContent = false;
  clickArray = [];

  constructor() { }

  ngOnInit() {
  }

  performButtonAction() {
    this.showSecretContent = !this.showSecretContent;
    this.clickArray.push(new Date());
  }

}

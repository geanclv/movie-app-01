import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  // Dynamic date to show in footer
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

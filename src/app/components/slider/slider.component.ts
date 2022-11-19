import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger("slideFade", [
      state("void", style({opacity: 0})),
      transition("void <=> *", [animate("1s")])
    ])
  ]
})
export class SliderComponent implements OnInit {

  //Declaring data that could be passed to this component
  @Input() items: Movie[] = [];

  //Changing movie in the main slide
  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      // The currentSlider will continue until the items array length
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 3000)
  }

}

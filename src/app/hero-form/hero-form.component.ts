import { Component } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  powers = ['Really smart', 'Super Flexible', 'Super hot', 'Weather changer'];
  model = new Hero(18, 'Dr Iq', this.powers[0], "Chuck Overstreet");
  submitted = false;
onSubmit() {
  this.submitted = true;
}
  newHero() {
    this.model = new Hero(42, '', '');
  }
  constructor() {
  }

}



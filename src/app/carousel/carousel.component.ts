import { Component } from '@angular/core';
import { Images } from './images.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {

  image: Images[] = [
    new Images("Overwatch", "../assets/images/overwatch.png", "item active"),
    new Images("RuneScape", "../assets/images/osrs.png", "item"),
    new Images("Destiny 2", "../assets/images/destiny.png", "item")
  ];



}

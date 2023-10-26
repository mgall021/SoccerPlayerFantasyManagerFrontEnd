import { Component } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers:[NgbCarouselConfig,NgbCarouselModule],
})
export class CarouselComponent {
  images: any = [
    {
      name: 'London',
      url: 'https://imgs.search.brave.com/ffKKkrm_V3IFDaiF-CV031UzeCPORddTPJhcjt9oaJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/NDQ1MzEyL3Bob3Rv/L2xvbmRvbi1vbi10/aGUtbW92ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZzRD/bEwydGpIQTJOSm5o/M3RlMmM5ZFM5ZHVq/WGs3QkJ6WDBhYU4z/OGRVcz0',
    },
    {
      name: 'Sydney',
      url: 'https://imgs.search.brave.com/QwZ4JwTs01xy2PMx-NRE9lKdalsBV5NXtKRZbmgO3tw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzI3LzUxLzU5/LzM2MF9GXzYyNzUx/NTkzM19QQ2hrQldt/VUt6SkVDcTdySmdQ/MmlCcG5NWm5YMmFP/RC5qcGc',
    },
    {
      name: 'San Francisco',
      url: 'https://imgs.search.brave.com/jxNFo1IBQxQdyE_E2hSzSt_Hr5Gh76PdZkBxAKGhae4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NDc2NjcwL3Bob3Rv/L3Nhbi1mcmFuY2lz/Y28tc2t5bGluZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MnFXT0F3Rkx0aG1L/X2g5eHMtelhMbWhq/ZlhoaFVNYWdSRVEx/SkpENFdNbz0',
    },
    {
      name: 'Seattle',
      url: 'https://imgs.search.brave.com/C-oLXxKFXDuINk6YDWFNhpooDe5ES5xemyOQ4lN-LrQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/ODc0Mzc5L3Bob3Rv/L3NlYXR0bGUtYXQt/c3Vuc2V0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1icFEx/U1pZdzdPQmRaSlNI/amFUTzA0cFJmUXIw/ajRtZ0JubVhJVW1V/Mm1VPQ',
    },
  ];
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}

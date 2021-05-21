import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3, 4, 5];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.getQueryImages();
  }

  getQueryImages() {
    this.imageService.get_images_unsplash('chile').subscribe((response) => {
      if (response) {
        console.log(response);
      } else {
        console.log('error');
      }
    });
  }
}

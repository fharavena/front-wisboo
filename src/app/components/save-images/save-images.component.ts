import { Component, OnInit } from '@angular/core';
import { localfavorite } from 'src/app/models/localfavorite';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-save-images',
  templateUrl: './save-images.component.html',
  styleUrls: ['./save-images.component.css']
})
export class SaveImagesComponent implements OnInit {
  pagina: number = 1;
  favoritas: Array<localfavorite> | undefined;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getfavorites();
  }

  getfavorites() {
    this.imageService.get_images_favorite(this.pagina).subscribe((response: any) => {
      if (response) {
        this.favoritas = response;
      } else {
        console.log('error')
      }
    })
  }

  cargar_mas() {
    this.pagina++;
    this.imageService.get_images_favorite(this.pagina).subscribe((response: any) => {
      if (response) {
        this.favoritas = this.favoritas?.concat(response);
      } else {
        console.log('error');
      }
    })
  }
}

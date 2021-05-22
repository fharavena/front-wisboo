import { Component, OnInit } from '@angular/core';
import { resunsplashResult } from 'src/app/models/resunsplashResult';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  resUnsplash: Array<resunsplashResult> | undefined;

  query: String = "";
  pagina = 1;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getQueryImages('example');
  }

  getQueryImages(query: String) {
    this.query = query;
    this.imageService.get_images_unsplash(this.query, this.pagina).subscribe((response: any) => {
      if (response) {
        this.pagina++;
        this.resUnsplash = response['resultados'];
      } else {
        console.log('error');
      }
    });
  }

  buscar_unsplash(valor: String) {
    this.pagina = 1;
    this.resUnsplash = undefined;
    this.getQueryImages(valor);
  }

  guardar(url: String) {
    this.imageService.save_image(url).subscribe((response: any) => {
      if (response) {
        // console.log("ok");
      } else {
        console.log("error");
      }
    })
  }

  cargar_mas() {
    this.pagina++;
    this.imageService.get_images_unsplash(this.query, this.pagina).subscribe((response: any) => {
      if (response) {
        this.pagina++;
        Array.prototype.push.apply(this.resUnsplash, response['resultados'])
      } else {
        console.log('error');
      }
    });
  }
}

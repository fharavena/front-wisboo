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
  msg_success: string = "";
  msg_dup_url: string = "";

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
    this.msg_success = "";
    this.msg_dup_url = "";
    this.pagina = 1;
    this.resUnsplash = undefined;
    this.getQueryImages(valor);
  }

  guardar(url: String) {

    this.imageService.save_image(url).subscribe(
      (response: any) => {
        if (response) {
          this.msg_success = "Imagen guardada con exito";
          this.msg_dup_url = ""
        } else {
          console.log("error");
        }
      },
      err => {
        this.msg_success = "";
        this.msg_dup_url = "La url de la imagen ya existe en el registro"
        console.log(err.error);
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

  reset_msg_success() {
    this.msg_success = "";
  }

  reset_msg_dup_url() {
    this.msg_dup_url = ""
  }

}

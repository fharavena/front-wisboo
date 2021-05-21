import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-images',
  templateUrl: './save-images.component.html',
  styleUrls: ['./save-images.component.css']
})
export class SaveImagesComponent implements OnInit {
  images = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/common/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { SaveImagesComponent } from './components/save-images/save-images.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'saveimages', component: SaveImagesComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

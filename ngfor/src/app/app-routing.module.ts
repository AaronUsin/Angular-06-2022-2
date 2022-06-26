import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { MouseComponent } from './mouse/mouse.component';
import { RabbitComponent } from './rabbit/rabbit.component';

const routes: Routes = [
  {path:"",redirectTo:"cat", pathMatch:"full"},
  {path:"cat", component: CatComponent},
  {path:"dog", component: DogComponent},
  {path:"mouse", component: MouseComponent},
  {path:"rabbit", component: RabbitComponent},
  {path:"add-cat", component: AddCatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

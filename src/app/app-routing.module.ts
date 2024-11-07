import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';
import { UbicanosComponent } from './paginas/ubicanos/ubicanos.component';

const routes: Routes = [
  { path: "Inicio", component: PortafolioComponent},
  { path: "about", component: AboutComponent},
  { path: "item", component: ItemComponent},
  { path: "ubicanos", component: UbicanosComponent},
  { path: "**", pathMatch: "full", redirectTo: "Inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define tus rutas aquí
const routes: Routes = [
  // ... define tus rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Asegúrate de exportar RouterModule
})
export class AppRoutingModule { }
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'mis-pedidos', component: MisPedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
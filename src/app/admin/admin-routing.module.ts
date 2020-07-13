import { NgModule } from '@angular/core'
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'service/:id', component: ServiceComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
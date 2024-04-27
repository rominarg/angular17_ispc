import { Routes } from '@angular/router';

import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';


export const routes: Routes = [
    {path:'nav', component:NavComponent},
    {path:'footer', component:FooterComponent},
    {path:'home', component: HomeComponent},
   

];

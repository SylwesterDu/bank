import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { WelcomeScreenContentComponent } from './components/welcome-screen-content/welcome-screen-content.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenContentComponent },
  { path: 'home', component: HomeScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

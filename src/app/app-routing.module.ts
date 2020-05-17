import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: 'LandingPage', component: LandingPageComponent },
  { path: 'Searchbar', component: SearchBarComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: '', redirectTo: '/LandingPage', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

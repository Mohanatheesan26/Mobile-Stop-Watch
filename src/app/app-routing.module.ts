import { SinglePostComponent } from './single-post/single-post.component';
import { HomeComponent } from './home/home.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'stop-watch',
    component: StopWatchComponent,
  },
  {
    path: ':id',
    component: SinglePostComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { FramePageComponent } from './pages/master/frame.page';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: HomePageComponent }
    ]
  },

  { path: 'jobs', component: JobsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

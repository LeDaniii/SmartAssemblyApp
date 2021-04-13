import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProjectLogDirectionComponent } from './project-log-direction/project-log-direction.component';
import { LogMyPlantsComponent } from './log-my-plants/log-my-plants.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'ProjectLogDirection',
    component: ProjectLogDirectionComponent,
  },
  {
    path: 'CurrentLog',
    component: LogMyPlantsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

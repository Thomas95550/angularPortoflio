import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { EmailService } from './app-contact/email.service';
import { ProjectService } from './app-project/project.service';

import { AppComponent } from './app.component';
import { AppHeaderDirective } from './app-header/app-header.directive';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHeaderNameDirective } from './app-header/app-header-name.directive';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppProjectComponent } from './app-project/app-project.component';
import { AppScrollEffectDirective } from './app-scroll-effect.directive';
import { AppAboutTextillateDirective } from './app-about/app-about-textillate.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDirective } from './app-project/project.directive';


const routes: Routes = [
  {
    path: '',
    component: AppHeaderComponent,
    children: [
      { path: 'about', component: AppAboutComponent },
      { path: 'project', component: AppProjectComponent },
      { path: 'project/:id', component: ProjectDetailComponent },
      { path: 'contact', component: AppContactComponent },
    ]
  },

  // App routes goes here here
  {
    path: '',
    component: AppLayoutComponent,
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AppHeaderDirective,
    AppLayoutComponent,
    AppHeaderNameDirective,
    AppAboutComponent,
    AppHeaderComponent,
    AppContactComponent,
    AppProjectComponent,
    AppScrollEffectDirective,
    AppAboutTextillateDirective,
    ProjectDetailComponent,
    ProjectDirective
  ],
  providers: [EmailService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

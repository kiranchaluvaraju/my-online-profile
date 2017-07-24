import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent },
        { path: 'resume', component: ResumeComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ],
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

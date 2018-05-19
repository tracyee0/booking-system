import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { ErrorComponent } from './error/error.component';
import { MockServiceService} from './mock-service.service';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';


const ROUTES = [
  {path: '', component: LandingComponent},
  {path: 'course-one', component: Course1Component},
  {path: 'course-two', component: Course2Component},
  {path: 'course-three', component: Course3Component},
  {path: 'home', component: LandingComponent},
  {path: 'profile',component: ProfileComponent},
  {path: '**', component: ErrorComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    Course1Component,
    Course2Component,
    Course3Component,
    ErrorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule
    
  ],
  providers:[MockServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

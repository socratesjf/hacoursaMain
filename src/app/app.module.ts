import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { CoursePageService } from './services/course-page/course-page.service';
import { DataService } from './services/data/data.service';
import { environment } from './../environments/environment';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDividerModule} from '@angular/material/divider'
import { MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './admin/teacher-dashboard/teacher-dashboard.component';
import { CourseLearningSpaceComponent } from './courses/course-learning-space/course-learning-space.component';
import { CourseForumComponent } from './courses/course-forum/course-forum.component';
import { CourseWatchComponent } from './courses/course-watch/course-watch.component';
import { CourseResourcesComponent } from './courses/course-resources/course-resources.component';
import { SignupComponent } from './signup/signup.component';
import { CourseViewBannerComponent } from './course-view-banner/course-view-banner.component';
import { CourseViewSpecCardComponent } from './course-view-spec-card/course-view-spec-card.component';
import { CourseCurriculumComponent } from './course-curriculum/course-curriculum.component';
import { TeacherCardComponent } from './teacher-card/teacher-card.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FormsModule } from '@angular/forms';
import { ForumQuestionComponent } from './courses/course-forum/forum-question/forum-question.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesListComponent } from './courses-list/courses-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CourseCatalogComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    FooterComponent,
    BgNavbarComponent,
    CourseViewComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyProfileComponent,
    AdminDashboardComponent,
    TeacherDashboardComponent,
    CourseLearningSpaceComponent,
    CourseForumComponent,
    CourseWatchComponent,
    CourseResourcesComponent,
    SignupComponent,
    CourseViewBannerComponent,
    CourseViewSpecCardComponent,
    CourseCurriculumComponent,
    TeacherCardComponent,
    ForumQuestionComponent,
    LoginComponent,
    PricingComponent,
    AboutUsComponent,
    CoursesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'course-view/:id', component: CourseViewComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'signin', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'pricing', component: PricingComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'courses-list', component: CoursesListComponent},
      {path: 'my-profile', component: MyProfileComponent},
      {path: 'my-profile', component: MyProfileComponent},
      {path: 'admin/admin-dashboard', component: AdminDashboardComponent},
      {path: 'admin/teacher-dashboard', component: TeacherDashboardComponent},
      {path: 'admin/teacher-dashboard', component: TeacherDashboardComponent},
      {path: 'course-learning-space', component: CourseLearningSpaceComponent, 
        children:[
          {path: 'watch', component: CourseWatchComponent},
          {path: 'forum', component: CourseForumComponent},
          {path: 'resources', component: CourseResourcesComponent},
                 ]},
      {path: 'course-learning-space/forum', component: CourseForumComponent},
      {path: 'course-learning-space/watch', component: CourseWatchComponent},
      {path: 'course-learning-space/resources', component: CourseResourcesComponent},
    ])
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    DataService,
    CoursePageService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

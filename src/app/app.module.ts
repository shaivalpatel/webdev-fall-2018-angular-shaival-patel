import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {UserService} from './services/user.service.client';
import {CourseService} from './services/course.service.client';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleService} from './services/module.service.client';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import {LessonService} from './services/lesson.service.client';
import { TopicListComponent } from './topic-list/topic-list.component';
import {TopicService} from './services/topic.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetService} from './services/widget.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    ModuleListComponent,
    LessonListComponent,
    TopicListComponent,
    WidgetListComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, CourseService, ModuleService, LessonService, TopicService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

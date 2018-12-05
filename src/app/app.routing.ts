import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseListComponent} from './course-list/course-list.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonListComponent} from './lesson-list/lesson-list.component';
import {TopicListComponent} from './topic-list/topic-list.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'course/:userId', component: CourseListComponent },
  { path: 'course/:userId/course/:courseId/module', component: ModuleListComponent },
  { path: 'course/:userId/course/:courseId/module/:moduleId/lesson', component:  ModuleListComponent },
  { path: 'course/:userId/course/:courseId/module/:moduleId/lesson/:lessonId/topic', component:  ModuleListComponent  },
  { path: 'course/:userId/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component:  ModuleListComponent  },
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId', component: ProfileComponent}
];
export const routing = RouterModule.forRoot(appRoutes);


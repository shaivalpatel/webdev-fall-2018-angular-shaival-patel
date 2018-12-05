import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service.client';
import {ModuleService} from '../services/module.service.client';
import {LessonService} from '../services/lesson.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessons = []
  constructor( private lessonService: LessonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params =>  this.lessonService.findAllLesson( parseInt ( params.courseId), parseInt(params.moduleId))
          .then(response => response.json())
          .then(lessons => this.lessons = lessons)
      );
  }

}

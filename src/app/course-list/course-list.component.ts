import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service.client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [
    {title: 'CS5200', id: 123},
    {title: 'CS5610', id: 234},
    {title: 'CS3200', id: 345},
    {title: 'CS4550', id: 456}
  ];

  constructor(private router: Router, private courseService: CourseService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params =>  this.courseService.findAllCourses( parseInt (params.userId))
          .then(response => response.json())
          .then(courses => this.courses = courses)
      );

  }
  //   this.courseService.findAllCourses()
  //     .then(response => response.json())
  //     .then(courses => this.courses = courses);
  // }

  addourse() {
    console.log('add course');
  }
  goToModule(courseId) {
    this.router.navigate(['/course', courseId, '/module']);
  }
}

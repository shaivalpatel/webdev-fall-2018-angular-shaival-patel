import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service.client';
import {ModuleService} from '../services/module.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules = [];
  courseId = 0;
  constructor(private moduleService: ModuleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params =>  this.moduleService.findAllModule( parseInt ( params.courseId))
          .then(response => response.json())
          .then(modules => this.modules = modules)
      );

  }



}

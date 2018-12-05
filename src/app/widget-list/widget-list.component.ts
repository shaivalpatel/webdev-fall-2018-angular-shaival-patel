import { Component, OnInit } from '@angular/core';
import {TopicService} from '../services/topic.service.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets = []
  constructor( private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params =>  this.widgetService
          .findAllWidget( parseInt ( params.courseId), parseInt(params.moduleId),parseInt(params.lessonId),parseInt(params.topicId))
          .then(response => response.json())
          .then(widgets => this.widgets = widgets)
      );
  }

}


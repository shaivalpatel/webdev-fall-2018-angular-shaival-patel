import { Component, OnInit } from '@angular/core';
import {LessonService} from '../services/lesson.service.client';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics = []
  constructor( private topicService: TopicService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params =>  this.topicService.findAllTopic( parseInt ( params.courseId), parseInt(params.moduleId),parseInt(params.lessonId))
          .then(response => response.json())
          .then(topics => this.topics = topics)
      );
  }

}


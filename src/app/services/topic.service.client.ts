import { Injectable } from '@angular/core';
@Injectable()
export class TopicService {
  findAllTopic(courseId, moduleId, lessonId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic', {
      credentials: 'include'
    });
  }
  findTopicById (courseId, moduleId, lessonId, topicId) {
    fetch('http://localhost:8080/api/course/' +
      courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic' + topicId).then(response => response.json());
  }

  updateTopic (courseId, moduleId, lessonId, topicId, topic) {
    return fetch('http://localhost:8080/api/course/' +
    courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic' + topicId, {
      body: JSON.stringify(topic),
      credentials: 'include',
      headers: {'content-type': 'application/json'},
      method: 'PUT'
    }).then(response => response.json());
  }
  deleteTopic (courseId, moduleId, lessonId, topicId) {
    return fetch('http://localhost:8080/api/course/' +
      courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic' + topicId, {
      credentials: 'include',

      headers: {'content-type': 'application/json'},
      method: 'DELETE'
    }).then(response => response.json());
  }

  createTopic (courseId, moduleId, lessonId, topic) {
    return fetch('http://localhost:8080/api/course/' +
      courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic', {
      credentials: 'include',
      body: JSON.stringify(topic),
      headers: {'content-type': 'application/json'},
      method: 'POST'
    }).then(response => response.json());

  }

}

import { Injectable } from '@angular/core';
@Injectable()
export class LessonService {
  findAllLesson(courseId, moduleId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson', {
      credentials: 'include'
    });
  }

  findLessonById (userId, courseId, moduleId, lessonId) {
    fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId).then(response => response.json());
  }

   updateLesson (courseId, moduleId, lessonId, lesson) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId, {
      credentials: 'include',
      body: JSON.stringify(lesson),
      headers: {'content-type': 'application/json'},
      method: 'PUT'
    }).then(response => response.json());
  }
  deleteLesson (courseId, moduleId, lessonId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId, {
      credentials: 'include',
      headers: { 'content-type': 'application/json'},
      method: 'DELETE'
    }).then(response => response.json());
  }

  createLesson (courseId, moduleId, lesson) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId , {
      credentials: 'include',
      body: JSON.stringify(lesson),
      headers: {'content-type': 'application/json'},
      method: 'POST'
    }).then(response => response.json());
  }
}

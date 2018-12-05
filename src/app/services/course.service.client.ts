import { Injectable } from '@angular/core';
@Injectable()
export class CourseService {
  findAllCourses(courseId) {
    return fetch('http://localhost:8080/api/user/' + courseId + '/course', {
      credentials: 'include'
    });
  }
    createCourse (course, userId) {
      return fetch('http://localhost:8080/api/user/' + userId + '/course', {
        body: JSON.stringify(course),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }}).then(response => response.json());
    }

  deleteCourse  (cid, userId) {
      return fetch('http://localhost:8080/api/user/' + userId + '/course/' + cid, {
        method: 'DELETE'
      }).then(response => response.json());
    }

  findCourseById(userId, courseId) {

      return fetch('http://localhost:8080/api/user/' + userId + '/course/' + courseId).then(response => response.json());

    }
    updateCourse(userId, course, courseId) {
      return fetch('http://localhost:8080/api/user/' + userId + '/course/' + courseId, {
        body: JSON.stringify(course),
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
    }
}


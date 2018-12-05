import { Injectable } from '@angular/core';
@Injectable()
export class ModuleService {
  findAllModule(courseId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module', {
      credentials: 'include'
    });
  }
  createModule(courseId, module) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module', {
      credentials: 'include',
      body: JSON.stringify(module),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }


  editModule(courseId, moduleId, module) {
    return fetch ('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId, {
      credentials: 'include',
      body: JSON.stringify(module),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteModule(courseId, moduleId, module) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId, {
      credentials: 'include',
      body: JSON.stringify(module),
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }

  findModuleById(moduleId, courseId, userId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId, {


    }).then(response => response.json());
  }
}

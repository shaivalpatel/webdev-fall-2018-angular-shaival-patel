import { Injectable } from '@angular/core';
@Injectable()
export class WidgetService {
  findAllWidget(courseId, moduleId, lessonId, topicId) {
    return fetch('http://localhost:8080/api/' + 'topic/' + topicId + '/widget', {
      credentials: 'include'
    });
  }
  createWidget (topicId, widgetId, widget)  {
    return fetch( 'http://localhost:8080/api/' + 'topic/' + topicId + '/widget' + widgetId, {
      credentials: 'include',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'},
      method: 'POST'
    }).then(response => response.json());
  }

  deleteWidget = (topicId, widgetId, widget) => {
    return fetch('http://localhost:8080/api/' + 'topic/' + topicId + '/widget' + widgetId, {
      credentials: 'include',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'},
      method: 'DELETE'
    }).then(response => response.json());
  }

  updateWidget = (topicId, widgetId, widget) => {
    return fetch('http://localhost:8080/api/' + 'topic/' + topicId + '/widget' + widgetId, {
      credentials: 'include',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'},
      method: 'PUT'
    }).then(response => response.json());
  }


  findWidgetById = (topicId, widgetId, widget) => {
    return fetch('http://localhost:8080/api/' + 'topic/' + topicId + '/widget' + widgetId, {
      credentials: 'include',
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'},
      method: 'PUT'
    }).then(response => response.json());
  }
}

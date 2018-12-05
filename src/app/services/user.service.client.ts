import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
  logged = false;
  users = [
    {_id: 123, username: 'alice', password: 'alice'},
    {_id: 234, username: 'bob', password: 'bob'}
  ];
 findUserByCredentials(username, password) {
     return fetch('http://localhost:8080/api/login',
       {
         credentials: 'include',
         method: 'POST',
         body: JSON.stringify({
           'username': username,
           'password': password
         }),
         headers: {
           'Content-type': 'application/json'
         }

       });
  }
  findUserById(userId) {
    return  fetch('http://localhost:8080/api/user/' + userId, {
      credentials : 'include'
    });
  }

  login(username, password) {
    return fetch('http://localhost:8080/api/login',
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({
          'username': username,
          'password': password
        }),
        headers: {
          'Content-type': 'application/json'
        }

      });
    }
}

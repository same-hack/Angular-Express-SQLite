import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // HttpClientをインスタンス化(DI)
  constructor(private http: HttpClient) {}

  // http://localhost:4200/api/user/
  // 上記のURLへアクセスし、全てのユーザを取得
  fetchAllUsers() {
    return this.http.get('/api/user/');
  }

  // http://localhost:4200/api/user/:id
  // 上記のURLへアクセスし、指定のユーザを取得
  // ※:idはユーザのIDを渡します
  fetchUserById(id: number) {
    return this.http.get(`/api/user/${id}`);
  }
}

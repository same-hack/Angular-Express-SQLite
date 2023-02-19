import { Component } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[];
  user: User;

  // サービスファイルをDI
  constructor(private service: AppService) {}

  /**サービスファイルのfetchAllUsersを実行する */
  onFetchAllUsers() {
    this.service.fetchAllUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  /**サービスファイルのfetchUserByIdを実行する */
  onFetchUserById() {
    this.service.fetchUserById(1).subscribe((res: any) => {
      this.user = res;
    });
  }
}

// User型
interface User {
  id: number;
  name: string;
}

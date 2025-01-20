import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CustomlibUsersComponent,
  CustomlibUsersService,
} from 'customlib-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomlibUsersComponent],
  providers: [CustomlibUsersService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'CodeSandbox';
  // userService = Inject(CustomlibUsersService);
  constructor(private userService: CustomlibUsersService) {}

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((res: any) => console.log('res:', res));
  }
}

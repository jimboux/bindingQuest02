import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://elintranews.com/wp-content/uploads/2021/08/Hasbullah-Magomedov.-Foto-Instagram-Hasbullah.-1.jpg',
    pwet: true,
  };

  hideAge() {
    if (this.user.pwet === false) {
      this.user.pwet = true;
    } else this.user.pwet = false;
  }
}

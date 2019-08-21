import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address;
  hobbies:string[];


  constructor() { }

  ngOnInit() {
    this.name = 'Sam Burk';
    this.age = 30;
    this.hobbies = ['a', 'b', 'c'];
  }

  onClick() {

  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.push(hobby);
    return false;
  }

}



interface Address {
  street:string;
  city:string;
  state:string;
}


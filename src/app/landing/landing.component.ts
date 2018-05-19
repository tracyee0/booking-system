import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
sayhi(){
  alert("Hi there!")
}
// openDialog(){
//   let the_modal =document.getElementById ('myDialog')
//   the_modal.showModal();
// }

// closeDialog(){
//   let the_modal= document.getElementById('myDialog')
//   the_modal.close();
// }
}

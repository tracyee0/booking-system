import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide: Boolean = false;

  change_Visibility(){
if(this.hide === true){
  this.hide = false
}
else {
  this.hide = true
}
  }


}

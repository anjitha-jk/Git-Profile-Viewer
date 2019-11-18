import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  name: string;
  username: any;
data: any;
error = false;
loader = false;
local;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}



  ngOnInit() {
  }



find() {

  this.local = localStorage.getItem(this.username);

  if (this.local) {
 this.data = JSON.parse(this.local);
 this.loader = false;
  } else {

    console.log(this.username);
    this.loader = true;
    this.getProduct().subscribe( Resp => {
    this.data = Resp;
    this.error = false;
    this.loader = false;
    console.log(Resp);
    localStorage.setItem(this.username, JSON.stringify(this.data));


}, err => {
    this.error = true;
    this.data = false ;
    this.loader = false;

    if (this.username) {
      this.snackBar.open('Bad Credentials', 'Close');
    } else {
      this.snackBar.open('User name field is empty' , 'Close');
    }

});
}

  }


getProduct() {
  return this.http.get('https://api.github.com/users/' + this.username + '?access_token=a30877fda8fd70ce110fe4128bd4dec124f0c1c9');
}

}




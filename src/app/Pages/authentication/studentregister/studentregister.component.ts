import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrl: './studentregister.component.css'
})
export class StudentregisterComponent {

  constructor(
    public router:Router
  ) { }
  
  ngOnInit(): void {
    this.initFunction();
  }

  initFunction() {

  }
  login() {
    this.router.navigate(['home/login'])
  }
}

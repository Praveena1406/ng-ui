import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parentregister',
  templateUrl: './parentregister.component.html',
  styleUrl: './parentregister.component.css'
})
export class ParentregisterComponent {

  constructor(
    public router: Router
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

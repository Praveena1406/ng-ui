import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
     
  constructor(
    public router:Router
  ) { }
  showForm(role: string){
    this.router.navigate([`home/contact/${role}`])
  }
  
  ngOnInit(): void {
    this.initFunction();
  }

  initFunction() {

  }
}

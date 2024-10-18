import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
        
  constructor(
    public router: Router
  ) { }
  showForm(role: string){
    this.router.navigate([`home/about/${role}`])
  }
  
  ngOnInit(): void {
    this.initFunction();
  }

  initFunction() {

  }

}

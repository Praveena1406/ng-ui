import { RouterModule, Routes } from '@angular/router';
import { PagesDeclaration } from './Pages/pages.declaration';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Pages/authentication/home/home.component';
import { AboutComponent } from './Pages/authentication/about/about.component';
import { RegisterComponent } from './Pages/authentication/register/register.component';
import { StudentregisterComponent } from './Pages/authentication/studentregister/studentregister.component';
import { AdminregisterComponent } from './Pages/authentication/adminregister/adminregister.component';
import { ParentregisterComponent } from './Pages/authentication/parentregister/parentregister.component';
import { LoginComponent } from './Pages/authentication/login/login.component';



export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home/about', component: AboutComponent },
    { path: 'home/login/register', component: RegisterComponent },
    { path: 'home/login/register/studentregister', component: StudentregisterComponent },
    { path: 'home/login/register/adminregister', component: AdminregisterComponent },
    { path: 'home/login/register/parentregister', component: ParentregisterComponent },
    { path: 'home/login', component: LoginComponent}
];

@NgModule({
    declarations: [
        PagesDeclaration
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}

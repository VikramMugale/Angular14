import { Component } from '@angular/core';

import { AbstractControl, EmailValidator, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent 
{
  
   name : string="";  
   city : string = "";
   
   constructor(public obj : FormBuilder)
   {
    
   }
   nform = this.obj.group(
    {
       'name':['',Validators.compose([Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")])],
       'email':['',Validators.compose([Validators.required,Validators.email])],
       'phone':['',Validators.compose([Validators.required,Validators.pattern("[0-9]+")])],
       'city':['',Validators.compose([Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+"),Validators.minLength(4)])],
       'zipcode':['',Validators.compose([Validators.required,Validators.pattern("[0-9]+"),Validators.maxLength(5)])],
       'comments':['',Validators.compose([Validators.required,Validators.minLength(30)])]
    }
  )

  
   
}

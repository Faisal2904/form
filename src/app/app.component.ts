import { Component,OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
   genders=['male','female'];
  signupForm:FormGroup;
 forbiddenUsernmae=['chris','anna'];

 ngOnInit(){
   this.signupForm = new FormGroup({
      
      'plateCount': new FormControl(null,[Validators.required,this.count.bind(this)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'bookingDate':new FormControl(null,[Validators.required]),
      'bookingName':new FormControl(null,Validators.required)
     
      
      
      
       
    })

     console.log(this.signupForm);
 }

 count( control:FormControl):{[s:string]:boolean}{  
  // console.log("dddd",control.value)  //custom validators
     if(control.value<1){
       return {'count':true}
     }
  
}

book(control:FormControl):{[s:string]:boolean}{
  if(control.value<Date()){
       return {'count':true}
     }
  
}


onSubmit(){
  console.log(this.signupForm);
}


}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ServiceService } from '../service.service';
import { filter, map, takeUntil } from 'rxjs/operators';

import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { User } from '../user.model';
@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  submitted: boolean=false;
  form:FormGroup;
  subscribe: Subject<any> = new Subject<any>();
  navigationSubscription: any;
  public userObj: User;
  constructor(private formBuilder:FormBuilder,private service:ServiceService,private router:Router) { 
    this.userObj = new User();
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
      id:['',[Validators.required,Validators.pattern(/^[^-\s][0-9 ]*$/)]],
      Name:['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      userName:['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      email:['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z@. ]*$/)]],
      phone:['',[Validators.required,Validators.pattern(/^[^-\s][0-9 ]*$/)]],
          })
  }
 
  
get f(){
  return this.form.controls
}
submit(){
  
  this.submitted =true;
  if(this.form.valid){
    // const obj={
    //   "id": this.form.value.id,
    //   "name":this.form.value.name,
    //   "username": this.form.value.username,
    //   "email":this.form.value.email,
    //   "phone": this.form.value.phone
    // }
    this.userObj.id=0
    this.userObj.name=this.form.value.Name
    this.userObj.username=this.form.value.userName
    this.userObj.email=this.form.value.email
    this.userObj.phone=this.form.value.phone
    console.log(this.userObj);
    this.service.postRequest(this.userObj).pipe(takeUntil(this.subscribe)).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/dashboard'])
    },error=>{
      console.log(error);
    })
  }
}


}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  submitted: boolean=false;
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form=this.formBuilder.group({
      id:['',[Validators.required,Validators.pattern(/^[^-\s][0-9 ]*$/)]],
      firstName:['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      lastName:['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      email:['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z@. ]*$/)]],
      address:['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      state:['',Validators.required],
      city:['',Validators.required]
    })
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      skill: ['',[Validators.required,Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    console.log(this.items.length);

  }
  removeGroup(index) {
    const form = this.orderForm.get('items') as FormArray
    form.removeAt(index);
  }
get f(){
  return this.form.controls
}
submit(){
  
  this.submitted =true;
  if(this.form.valid){
  }
}
}

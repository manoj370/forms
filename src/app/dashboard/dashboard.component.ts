import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ServiceService } from '../service.service';
import { filter, takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  names: any;
  searchForm: FormGroup;
  value: any;
  public filterdata!: string;
  selectedname: any;
  subscribe: Subject<any> = new Subject<any>();
  navigationSubscription: any;
  id: any;
  constructor(private service:ServiceService,private fb:FormBuilder,private router:Router) {
    this.searchForm=this.fb.group({
      search:['']
    })
   }
 

  ngOnInit(): void {
    this.getCall();
    
  }
  search(value:any){
this.value=JSON.stringify(this.searchForm.value);
  }
  getCall(){
    this.service.sendGetRequest().pipe(takeUntil(this.subscribe)).subscribe((res:any)=>{
      console.log(res);
      this.names =res;
    },error=>{
      console.log(error);
    })
   
  }
 
  SelectedName(value:any){
    console.log(value.name)
    this.selectedname=value.name;
  }
  View(value:any){
    console.log(value.id)
    this.id=value.id;
    this.router.navigate(['/view',{id:this.id}])
  }
  ngOnDestroy(): void {
    this.subscribe.next();
    this.subscribe.complete();
    if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
   }
  }
  add(){
    this.router.navigate(['/post'])
  }
}
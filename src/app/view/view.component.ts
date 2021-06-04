import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceService } from '../service.service';
import { filter, map, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  subscribe: Subject<any> = new Subject<any>();
  navigationSubscription: any;
  id: any;
  viewres: any;
  constructor(private service:ServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.fetchCall(params.id)
  });
 
}
fetchCall(id){
    this.service.fetchRequest(id).pipe(takeUntil(this.subscribe)).subscribe((res:any)=>{
      console.log(res);
      this.viewres =res;
    },error=>{
      console.log(error);
    })
  }
}


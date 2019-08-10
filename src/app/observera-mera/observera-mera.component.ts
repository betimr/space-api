import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceApiService } from '../space-api.service';

@Component({
  selector: 'app-observera-mera',
  templateUrl: './observera-mera.component.html',
  styleUrls: ['./observera-mera.component.css']
})
export class ObserveraMeraComponent implements OnInit {
  public nums = [];
  private res;
  constructor(private spaceApi: SpaceApiService) { }

  ngOnInit() {
    const myObservable = new Observable((observer) => {
      var arr = [1, 2, 3, 4, 5];
      
      arr.forEach(element => {
        observer.next(element);
      });

      observer.complete();
    });
  
    const myObserver = {
      next: e => {this.nums[this.nums.length] = e; console.log('Number: ' + e)},
      complete: () => console.log('Complete')
    }

    myObservable.subscribe(myObserver);

    this.spaceApi.getSpaceImage().subscribe( (x) => 
      this.res = x
    );
    
  }
}

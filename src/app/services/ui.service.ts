import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private paramId: number;

  constructor(private route: ActivatedRoute) { }

  // getRouteId(): number {


  //   return this.paramId;

  // }

}

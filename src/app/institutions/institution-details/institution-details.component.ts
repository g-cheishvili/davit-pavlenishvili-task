import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import {of, pipe} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-institution-details',
  templateUrl: './institution-details.component.html',
  styleUrls: ['./institution-details.component.css']
})
export class InstitutionDetailsComponent implements OnInit {

  activatedId: number;
  institution: any;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.route
      .params
      .pipe(
        tap(
          ({id}) => {
            this.activatedId = id;
          }
        ),
        tap(
          () => this.getInstitutionDetails()
        )
      )
      .subscribe();
  }

  getInstitutionDetails() {

    this.dataService.getInstitutionDetails(this.activatedId)
      .pipe(
        tap(institution => {
          this.institution = institution;
        }),
        catchError((err) => {
          if(err instanceof HttpErrorResponse) {
            if(err.status === 404) {
              this.router.navigate([
                'not-found-page'
              ]);
            }
          }
          return of([]);
        })
      )
      .subscribe();
  }

  updateDetails(details: any) {
    details = {
      ...details,
      id: this.activatedId
    };

    this.dataService.updateInstitutionDetails(details).subscribe(res => {
      this.getInstitutionDetails();
    });

  }

  createBranch(details: any) {
    details = {
      ...details,
      id: this.activatedId
    };

    this.dataService.createBranch(details).subscribe(res => {

      this.getInstitutionDetails();
    });
  }


}

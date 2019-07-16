import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Branches} from "../../../models/branch.model";

@Component({
  selector: 'app-branches-detail',
  templateUrl: './branches-detail.component.html',
  styleUrls: ['./branches-detail.component.css']
})
export class BranchesDetailComponent implements OnInit {

  activatedId: string;
  branch: Branches = [];

  institutionId: any;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params');
      console.log(params);
      this.activatedId = params.branchID;
      this.institutionId = params.institutionID;
    });

    this.dataService.getInstitutionBranchDetails(this.activatedId, this.institutionId).subscribe(branch => {
      console.log('branch');
      console.log(branch);
      this.branch.push(branch);
    });
  }


  editBranch(details: any) {
    details = {
      ...details,
      id: this.activatedId,
      institutionID: this.institutionId,
    };
    this.dataService.updateInstitutionBranchDetails(details).subscribe(res => {
      console.log(res);
    });
    console.log(details);

  }

  createPerson(details: any) {
    details = {
      ...details,
      id: this.activatedId,
      institutionid: this.institutionId,
    };

    this.dataService.createPerson(details).subscribe(res => {
      console.log(res);
    });

    console.log(this.activatedId, this.institutionId,);
    console.log('personal');
    this.dataService.getPersonal(this.institutionId, this.activatedId).subscribe(persona => console.log(persona));
  }

  cancel() {
    this.router.navigate([`/institutions/institution/${this.institutionId}`])
  }
}

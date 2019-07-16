import {Component, OnInit} from "@angular/core";
import {DataService} from "../../../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  activatedId: string;
  // personal: BranchModel[] = [];

  institutionId: any;
  brachnId: any;


  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log('params');
      console.log(params);
      this.activatedId = params.branchID;
      this.institutionId = params.institutionID;
    });

    this.dataService.getInstitutionBranchPersonalDetails(this.activatedId, this.brachnId, this.institutionId).subscribe(person => {
      console.log(person);
      // this.branch.push(branch);
    });
  }
}

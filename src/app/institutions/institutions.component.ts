import { Institution } from '../models/institution.model';
import { InstitutionData } from '../models/institutionData.model';
import { DataService } from '../services/data.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})
export class InstitutionsComponent implements OnInit {

  institutions: Institution;
  totalPages = [];
  institutionName = '';
  institutionPid = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.getInstitutions(1);

  }

  getInstitutions(pageId) {
    this.dataService.getInstitutions(pageId, this.institutionName, this.institutionPid).subscribe((institutions: Institution) => {
      this.institutions = institutions;
      this.getTotalPages();
    });
  }

  clearInputs() {
    this.institutionName = '';
    this.institutionPid = '';
  }

  searchInstitution(institution: any) {

    this.institutionName = institution.name;
    this.institutionPid = institution.pid;

    this.getInstitutions(1);
    this.clearInputs();

  }

  getTotalPages() {
    this.totalPages = [];
    for (let i = 1; i <= this.institutions.last_page; i++) {
      this.totalPages.push(i);
    }
  }

}

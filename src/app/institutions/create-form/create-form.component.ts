import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {



  }

  createInstitution(institution: any) {
    console.log(institution);
    this.dataService.createInstitution(institution).subscribe(res => {
      console.log(res);
    });
  }

}

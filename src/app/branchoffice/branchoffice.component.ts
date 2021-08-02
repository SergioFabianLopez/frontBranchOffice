import { Component, OnInit } from '@angular/core';
import { branchoffice } from '../models/branchoffice/branchoffice.module';
import { BranchofficeService } from '../services/branchoffice.service';

@Component({
  selector: 'app-branchoffice',
  templateUrl: './branchoffice.component.html',
  styleUrls: ['./branchoffice.component.css']
})
export class BranchofficeComponent implements OnInit {
  data:any;
  constructor(private branchofficeService: BranchofficeService) { }

  ngOnInit(): void {
    this.branchofficeService.getbranchoffice().subscribe((data)=>{
    console.warn(data)
    this.data=data;
    })
  }

  deletebranchoffice(id:number){
    this.branchofficeService.deletebranchoffice(id);
    this.branchofficeService.getbranchoffice().subscribe((data)=>{
      console.warn(data)
      this.data=data;
      })
  }
}

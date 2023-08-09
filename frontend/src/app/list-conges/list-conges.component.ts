import { Component } from '@angular/core';
import { CongeService } from '../services/conge.service';

@Component({
  selector: 'app-list-conges',
  templateUrl: './list-conges.component.html',
  styleUrls: ['./list-conges.component.scss']
})
export class ListCongesComponent {

  conges:any;

  constructor(private congeService: CongeService){

  }

  ngOnInit(){
    this.CongeList()
  }

  CongeList(){
    this.conges = this.congeService.listConge().subscribe(
      conge => {
        this.conges = conge
        console.log(this.conges);
      }
    )
  }

  deleteConge(id:any){
    this.congeService.deleteConge(id).subscribe(
      conge => {
        console.log("Conge has been deleted.")
      }
    )
  }

}

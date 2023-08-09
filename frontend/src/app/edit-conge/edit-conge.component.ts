import { FormGroup , FormControl } from '@angular/forms'
import { Component } from '@angular/core';
import { CongeService } from '../services/conge.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrls: ['./edit-conge.component.scss']
})
export class EditCongeComponent {

  congeForm!: FormGroup;
  conge:any;
  id:any;

  constructor(
    private congeService: CongeService,
    private route: ActivatedRoute
    ){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('congeID'));
    console.log(this.id);
    this.congeService.findConge(this.id).subscribe(
      (conge)=> {
        this.conge = conge
        this.congeForm = new FormGroup({
            dateDebut: new FormControl(this.conge.dateDebut),
            dateFin: new FormControl(this.conge.dateFin),
            commentaire: new FormControl(this.conge.commentaire)
        })
      }
    )
  }

  onSubmit(){
    this.congeService.updateConge(this.congeForm.value, this.id).subscribe(
      (conge) => {
        console.log("Conge updated successfully.");
      }
    )
  }

}

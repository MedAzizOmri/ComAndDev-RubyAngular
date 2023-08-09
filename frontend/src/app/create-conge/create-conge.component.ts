import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms'
import { CongeService } from '../services/conge.service';


@Component({
  selector: 'app-create-conge',
  templateUrl: './create-conge.component.html',
  styleUrls: ['./create-conge.component.scss']
})
export class CreateCongeComponent {

  conge: any;

  congeForm = new FormGroup({
    dateDebut: new FormControl(''),
    dateFin: new FormControl(''),
    commentaire: new FormControl('')

  })

  constructor(private congeService: CongeService){

  }

  onSubmit(){
    this.congeService.addConge(this.congeForm.value).subscribe(
      conge => {
        this.conge=conge
      }
    );
  }

}

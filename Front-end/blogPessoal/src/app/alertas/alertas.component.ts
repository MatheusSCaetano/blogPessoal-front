import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() message: string //importando do service dos alerts
  @Input() type = 'success' //importando do service dos alerts

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit(){
  }

  onClose(){
    this.modal.hide()
  }
}

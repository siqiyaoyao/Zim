import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isVisible = false;

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }

  showConfirm = () => {
    this.confirmServ.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: 'OK',
      cancelText: 'Cancel'
    });
  }

  constructor(private confirmServ: NzModalService) { }

  ngOnInit() {
  }

}

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  modalReference: any;
  content: any;
  showContent = false;

  @Input() config;
  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService) {
    spinner.show();

  }

  ngOnInit() {
    this.config.data.subscribe(
      data => {
        this.content = data;
        this.showContent = true;
      },
      error => {
        this.content = null;
        this.showContent = true;
      });
  }

  onView(details) {
    this.modalReference = this.modalService.open(details, { size: 'lg', centered: true });
  }

  close() {
    this.modalReference.close();
  }

}

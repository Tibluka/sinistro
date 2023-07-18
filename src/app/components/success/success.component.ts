import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

  constructor(private modalService: ModalService,
    private router: Router) { }

  ngOnInit(): void {
  }


  close() {
    this.modalService.close(true);
    this.router.navigate(['/opening'])
  }


}

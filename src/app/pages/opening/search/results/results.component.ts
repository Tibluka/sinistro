import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() showResults: boolean = false;
  @Input() occurrence: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  select() {
    if (this.occurrence == 'morte' || this.occurrence == 'morte_acidental') {
      this.router.navigate(['death-policy-details'])
    } else this.router.navigate(['policy-details'])
  }

}

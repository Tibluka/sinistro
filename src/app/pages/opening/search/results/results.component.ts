import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() showResults: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  select() {
    this.router.navigate(['policy-details'])
  }

}

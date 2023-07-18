import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-follow-up',
  templateUrl: './results-follow-up.component.html',
  styleUrls: ['./results-follow-up.component.scss']
})
export class ResultsFollowUpComponent implements OnInit {

  @Input() showResults: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/follow-up/follow-up-details'])
  }

}

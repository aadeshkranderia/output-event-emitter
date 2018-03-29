import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-another-child-componenet',
  templateUrl: './another-child-componenet.component.html',
  styleUrls: ['./another-child-componenet.component.css']
})
export class AnotherChildComponenetComponent implements OnInit {
  @Input() value: string;
  outputValue: string;
  constructor() { }

  ngOnInit() {
  }

  renderName() {
    this.outputValue = this.value;
    alert("Value passed is - " + this.outputValue);
  }

}

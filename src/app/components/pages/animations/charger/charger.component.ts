import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.scss']
})
export class ChargerComponent implements OnInit {

  isCharging = true;

  constructor() { }

  ngOnInit(): void {
  }

  onCharge() {
    this.isCharging = !this.isCharging;
  }

}

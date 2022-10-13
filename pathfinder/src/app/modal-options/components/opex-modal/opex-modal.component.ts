import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opex-modal',
  templateUrl: './opex-modal.component.html',
  styleUrls: ['./opex-modal.component.scss'],
})
export class OpexModalComponent implements OnInit {
  constructor() {}
  isLoaded: boolean = false;
  ngOnInit(): void {}
}

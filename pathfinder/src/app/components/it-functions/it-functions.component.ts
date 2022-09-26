import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-functions',
  templateUrl: './it-functions.component.html',
  styleUrls: ['./it-functions.component.scss'],
})
export class ItFunctionsComponent implements OnInit {
  constructor() {}
  itFunctions = new FormGroup({
    dcItspend: new FormControl(''),
    dcftespread: new FormControl(''),
    eucitpend: new FormControl(''),
    eucftespread: new FormControl(''),
    sditspend: new FormControl(''),
    sdftespread: new FormControl(''),
    nitspend: new FormControl(''),
    nftespread: new FormControl(''),
    aeitspend: new FormControl(''),
    aeftespread: new FormControl(''),
    asitspend: new FormControl(''),
    asftespread: new FormControl(''),
    imfaitspend: new FormControl(''),
    imfaftespread: new FormControl(''),
  });
  get dcItspend() {
    return this.itFunctions.get('dcItspend');
  }
  get dcftespread(){
    return this.itFunctions.get('dcItspread');
  }

  get eucitpend(){
    return this.itFunctions.get('eucitpend');
  }
  get eucftespread() {
    return this.itFunctions.get('eucitpread');
  }
  get sditspend() {
    return this.itFunctions.get('sditspend');
  }

  get sdftespread() {
    return this.itFunctions.get('sditspread');
  }

  get nitspend() {
    return this.itFunctions.get('nitspend');
  }
  get nftespread() {
    return this.itFunctions.get('nftespread');
  }

  get aeitspend(){
    return this.itFunctions.get('aeitspend');
  }
  get aeftespread() {
    return this.itFunctions.get('aeitspread');
  }
  get asitspend() {
    return this.itFunctions.get('asitspend');
  }
  get asftespread() {
    return this.itFunctions.get('asftespread');
  }
  get imfaitspend() {
    return this.itFunctions.get('imfaitspend');
  }
  get imfaftespread(){
    return this.itFunctions.get('imfaftespread');
  }
  ngOnInit(): void {}
}

import { Time } from '@angular/common';
import { newArray } from '@angular/compiler/src/util';
import { Component} from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent {

  anio:number = new Date().getFullYear();
}

import { Component, OnInit } from '@angular/core';
import { AutodeskService } from '../services/autodesk.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[AutodeskService],
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

}

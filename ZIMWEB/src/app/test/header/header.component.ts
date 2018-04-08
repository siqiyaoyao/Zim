import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navToggledTest = new EventEmitter();
  navOpen = false;
  constructor(private router: Router) { }

  ngOnInit() {

    
  }

  toggleNav(){
    this.navOpen = !this.navOpen;
    this.navToggledTest.emit(this.navOpen);
  }
}

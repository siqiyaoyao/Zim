import { TestComponent } from './test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';

import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponent, HeaderComponent, ]
})
export class TestModule { }

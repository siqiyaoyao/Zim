import { Injectable } from '@angular/core';
declare var Autodesk :any;
import * as $ from 'jquery';
@Injectable()
export class AutodeskService {

  
  constructor() { }

  init(div){
    var options = {env:'Local'};
    return Autodesk.Viewing.Private.GuiViewer3D($(div)[0], {});
  }
}

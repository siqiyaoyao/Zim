import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutodeskService } from '../../../services/autodesk.service';

declare var Autodesk : any;
//declare var viewer : any;
import * as $ from 'jquery';


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit,OnDestroy {

  constructor(
    private AutodeskService : AutodeskService,
  ) { }
  private viewer:any;
  private path3D:String;
  private path2D:String;
  private test:any;
  private div3D: String;
  private div2D: String
  ngOnInit() {
    this.div3D = '#3Dviwer'
    this.div2D = '#2Dviwer'
    this.path3D = 'assets/models/2d/3d.svf';
    this.path2D = 'assets/models/2d/f2d_结构平面__9.312m/primaryGraphics.f2d';
    this.viwerInit(this.div2D,this.path2D); 
    this.viwerInit(this.div3D,this.path3D); 

  }

  viwerInit(divName,path){
    var options = { env: 'Local' };
    var viewer;
    viewer = new Autodesk.Viewing.Private.GuiViewer3D($(divName)[0], {});
    Autodesk.Viewing.Initializer(options, function () {
      viewer.start();
      viewer.tearDown();
        //再次初始化Viewr
      viewer.setUp(viewer.config);
      viewer.load(path);
   
    });
  }
  ngOnDestroy(){

  }

}

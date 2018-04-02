import { environment } from './../../../../environments/environment';
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
  private viewer2D:any;
  private viewer3D:any;
  private _loadedDocument:any;
  private _blockEventSecondary: Boolean=false;
  private _blockEventMain:Boolean = false;
  private _doucuments:String = null;
  private _views2D:any;
  private _views3D:any;

  private path3D:String;
  private path2D:String;
  private test:any;
  private div3D: String;
  private div2D: String

  ngOnInit() {
    this.div3D = '#3Dviwer'
    this.div2D = '#2Dviwer'
    this.path3D = 'assets/models/2d0402/Resource/三维视图/{三维} 96277/{三维}.svf';
    this.path2D = 'assets/models/2d0402/2b3fcd79-6859-4870-ee68-96532ad70972_f2d/primaryGraphics.f2d';
    ///*
   
    this.viwer2DInit(this.div2D,this.path2D); 
    this.viwer3DInit(this.div3D,this.path3D); 
    //*/

    /*//-- test load document
    this._loadedDocument = "assets/models/2d0402/"
    this.loadDocument(this._loadedDocument);
    //*/
  }

  viwer3DInit(divName,path){
    var options = { env: 'Local' };
    var viewer;
    var main = this;
    main.viewer3D = new Autodesk.Viewing.Private.GuiViewer3D($(divName)[0], {});
    Autodesk.Viewing.Initializer(options, function () {
      main.viewer3D.start();
      main.viewer3D.tearDown();
        //再次初始化Viewr
      main.viewer3D.setUp(main.viewer3D.config);
      main.viewer3D.load(path);
      main.viewer3D.addEventListener( Autodesk.Viewing.GEOMETRY_LOADED_EVENT,function(envent){
         // 当模型加载完成后回调
         // test backcolor
         main.viewer3D.setBackgroundColor(1, 66,222, 255,255, 255);//渐变蓝天色
      })
      main.viewer3D.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function (event) {
        if (main._blockEventSecondary)
            return;

            // if a single item selected in 3D, select that same item in 2D.
        var curSelSetMain = main.viewer3D.getSelection();
        //--test dbid
        console.log(curSelSetMain);
        //if (curSelSetMain.length === 1) {
          main._blockEventMain = true;
          main.viewer2D.select(curSelSetMain)//select objects in secondary view
          main._blockEventMain = false;
        //}

       
    });
    /*
      Autodesk.Viewing.Document.load(documentId,function( doc ) {
            var geometryItems = [];
            //var rootItem = doc.getRootItem();
            geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties( doc.getRootItem(), {
            'type' : 'geometry',
            'role' : '3d'
            }, true );

            if ( geometryItems.length <= 0 ) return;

            // 在这边变更数列 geometryItems的索引
            var view = doc.getViewablePath( geometryItems[0] );
            viewer.load( view );
        },
        function( errorMsg ) {
            console.log( 'Load Error:' + errorMsg );
        });
    */
      });
   
  };

  viwer2DInit(divName,path){
    var options = { env: 'Local' };
    var viewer;
    var main = this;
    main.viewer2D = new Autodesk.Viewing.Private.GuiViewer3D($(divName)[0], {});
    Autodesk.Viewing.Initializer(options, function () {
      main.viewer2D.start();
      main.viewer2D.tearDown();
        //再次初始化Viewr
      main.viewer2D.setUp(main.viewer2D.config);
      main.viewer2D.load(path);
      main.viewer2D.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT,function (event) {
        if (main._blockEventMain) return;
        main.viewer2D.setZoomTowardsPivot(true)
            // if a single item, select and isolate same thing in 3D.
        var curSelSetSecondary = main.viewer2D.getSelection();
        //--test dbid
        console.log(curSelSetSecondary);
        if (curSelSetSecondary.length === 1) {
            main._blockEventSecondary = true;
            if (main.viewer3D.model.is2d() == false) {
                main.viewer3D.select(curSelSetSecondary);
                main.viewer3D.isolate(curSelSetSecondary);
                main.viewer3D.fitToView(curSelSetSecondary);
            }
            else {
                main.viewer3D.select(curSelSetSecondary);   // Call work-around to select objects in secondary view (see file TestFuncs.js)
                main.viewer3D.fitToView(curSelSetSecondary);
            }

            main._blockEventSecondary = false;
        }
      
      })
   
    })
  };

  loadDocument(urnStr){
    this._loadedDocument = null;
    var main = this;

    if (!urnStr || (0 === urnStr.length)) {
      alert("You must specify a URN!");
      return;
    }
    var fullUrnStr = "urn:" + urnStr;
    Autodesk.Viewing.Document.load(fullUrnStr, function(document) {
      main._loadedDocument = document; // keep this in a global var so we can reference it in other spots

          // get all the 3D and 2D views (but keep in separate arrays so we can differentiate in the UX)
      main._views3D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'3d'}, true);
      main._views2D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'2d'}, true);

      
      main.viwer3DInit(main.div3D,main.path3D); 
      main.viwer2DInit(main.div2D,main.path2D); 
      main.viewer3D.load(document.getViewablePath(main._views3D[0]));
      main.viewer2D.load(document.getViewablePath(main._views2D[0]));
          // load up first 3D view by default into the primary viewer
     /*
      if (main._views3D.length > 0) {
          loadView( main.viewer3D, main._views3D[0]);
      }
      else {      // there weren't any 3D views!
          if (main._views2D.length > 0) {
              loadView( main.viewer3D, main._views2D[0]);
              //$('#pu_viewToLoad').val('1000'); // selects first option in 2D list
          }
          else {
              alert("ERROR: No 3D or 2D views found in this drawing!");
          }
      }
          // now load the Secondary viewer with the first 2D view by default
      if (main._views2D.length > 0) {
          loadView( main.viewer2D, main._views2D[0]);
          //$('#pu_viewToLoad').val('1000'); // selects first option in 2D list
      }
      else {
          console.log("WARNING: No 2D views found for secondary view, using additional 3D view");
          if (main._views3D.length > 0)
              loadView( main.viewer2D, main._views3D[0]);
      }

*/
  }, function(errorCode, errorMsg) {
      alert('Load Error: ' + errorCode + " " + errorMsg);
    
  });

  }

  ngOnDestroy(){
  //destroy the viewer when leaving to avoid memory leaks
  if (this.viewer2D) {
    this.viewer2D.tearDown()
    this.viewer2D.finish()
    this.viewer2D = null
  }

  if (this.viewer3D) {
    this.viewer3D.tearDown()
    this.viewer3D.finish()
    this.viewer3D = null
  }

    console.log('destory');

  }
  
  

}

import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators/filter';
import { HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { UploadFile } from 'ng-zorro-antd';
import { NzMessageService  } from 'ng-zorro-antd'
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  uploading = false;
  fileList: UploadFile[] = [];
  constructor(
    private http: HttpClient,
    private msg: NzMessageService
  ) { }

  ngOnInit() {
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    return false;
  }

  handleUpload() {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts/', formData, {
      // reportProgress: true
    });
    this.http.request(req).pipe(filter(e => e instanceof HttpResponse)).subscribe((event: any) => {
      this.uploading = false;
      this.msg.success('upload successfully.');
    }, (err) => {
      this.uploading = false;
      this.msg.error('upload failed.');
    });
  }
}

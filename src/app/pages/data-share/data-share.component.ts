import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-data-share',
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css']
})
export class DataShareComponent {
  dataFilterVal: string = '';
  form!: FormGroup;

  constructor() { }

  ngAfterViewInit() {    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      dataFilter: new FormControl('')
    });    
  }

  applyFilter() {
    this.dataFilterVal = this.form.get('dataFilter')?.value;
  }
}

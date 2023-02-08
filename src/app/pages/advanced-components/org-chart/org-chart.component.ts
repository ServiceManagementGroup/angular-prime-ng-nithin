import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {
  data!: TreeNode[];
  tabs!:any[];
  
  ngOnInit(): void {
    this.data = [{
      label: 'Root',
      expanded: true,
      children: [
        {
          label: 'Child 1',
          expanded: true,
          children: [
            {
              label: 'Grandchild 1.1'
            },
            {
              label: 'Grandchild 1.2'
            }
          ]
        },
        {
          label: 'Child 2',
          expanded: true,
          children: [
            {
              label: 'Child 2.1'
            },
            {
              label: 'Child 2.2'
            }
          ]
        }
      ]
    }];
    this.tabs = [
      {
'header':'View tree',
'content':'Tab 1'
    },
    {
      'header':'Manage attributes',
      'content':'Tab 2'
          }
  ];
  }
}

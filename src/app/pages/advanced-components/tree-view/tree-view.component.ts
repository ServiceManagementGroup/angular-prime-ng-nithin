import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { HierApiService } from 'src/app/services/hier-api-service';
import { TreeNode } from 'primeng/api';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  nodes!: TreeNode[];
  total: number = 0;

  constructor(private hierService: HierApiService) {

  }

  ngAfterViewInit() {
    // this.dataShare.toggleSideBarState(false);
  }
  
  ngOnInit(): void {
    this.hierService.getChildren().pipe(take(1)).subscribe((response: any) => {
      console.log(response);
      this.nodes = response;
    });    
  }

  expandAll() {
    if (this.nodes != null && this.nodes != undefined) {
      this.nodes.forEach(node => {
        this.expandRecursive(node, true);
      });
    }
  }

  collapseAll() {
    if (this.nodes != null && this.nodes != undefined) {
      this.nodes.forEach(node => {
        this.expandRecursive(node, false);
      });
    }
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}

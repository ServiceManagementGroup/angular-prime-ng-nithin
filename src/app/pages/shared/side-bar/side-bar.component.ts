import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataShareService } from 'src/app/services/data-share/data-share.service';
import { MenuItem } from 'primeng/api';
import { AppRoutes } from 'src/app/models/routes';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnDestroy, OnInit {

  sideBarSubscription!: Subscription;
  sideBarOpen: boolean = false;
  items!: MenuItem[];

  constructor(private dataShare: DataShareService) {
    this.sideBarSubscription = this.dataShare.getSideBarState().subscribe((state: boolean) => {
      this.sideBarOpen = state;
    });
  }

  ngOnInit(): void {
    this.dataShare.toggleSideBarState(false);
    this.items = [
      {
        label: 'Advanced Components',
        items: [{
          label: 'Tree View',
          icon: 'pi pi-align-left',
          routerLink: `/${AppRoutes.AdvancedComponents}/${AppRoutes.TreeView}`
        },
        {
          label: 'File Upload',
          icon: 'pi pi-upload',
          routerLink: `/${AppRoutes.AdvancedComponents}/${AppRoutes.FileUpload}`
        },
        {
          label: 'Org View',
          icon: 'pi pi-download',
          routerLink: `/${AppRoutes.AdvancedComponents}/${AppRoutes.OrgChart}`
        }
        ]
      },
      {
        label: "Data Share",
        items: [{
          label: 'Sharing',
          icon: 'pi pi-share-alt',
          routerLink: `/${AppRoutes.DataShare}`
        }
        ]
      }
    ];
  }

  ngOnDestroy(): void {
    this.sideBarSubscription?.unsubscribe();
  }

  onHideSidebar() {
    this.dataShare.toggleSideBarState(false);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppBreadcrumbsComponent } from './app-breadcrumbs/app-breadcrumbs.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AsideComponent } from './aside/aside.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarFormComponent } from './sidebar-form/sidebar-form.component';
import { APP_SIDEBAR_NAV } from './sidebar-nav/sidebar-nav.component';
import { SidebarMinimizerComponent } from './sidebar-minimizer/sidebar-minimizer.component';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    DirectivesModule
  ],
  declarations: [
                HeaderComponent,
                SidebarComponent,
                AppBreadcrumbsComponent,
                AppFooterComponent,
                AsideComponent,
                SidebarFooterComponent,
                SidebarHeaderComponent,
                SidebarFormComponent,
                APP_SIDEBAR_NAV,
                SidebarMinimizerComponent,
              ],
  exports: [
            HeaderComponent,
            SidebarComponent,
            AppBreadcrumbsComponent,
            AppFooterComponent,
            AsideComponent
          ]
})
export class SharedModule { }

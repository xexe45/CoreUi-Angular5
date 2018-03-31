import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SIDEBAR_TOGGLE_DIRECTIVES } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AsideToggleDirective,
                NAV_DROPDOWN_DIRECTIVES,
                ReplaceDirective,
                SIDEBAR_TOGGLE_DIRECTIVES
                ],
  exports: [AsideToggleDirective,
    NAV_DROPDOWN_DIRECTIVES,
    ReplaceDirective,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],

})
export class DirectivesModule { }

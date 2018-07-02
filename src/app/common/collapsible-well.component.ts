import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleComponent()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `
})

export class CollapsibleWellComponent {
    visible = true;

    toggleComponent() {
        this.visible = !this.visible;
    }
}


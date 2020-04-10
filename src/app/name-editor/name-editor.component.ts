import { Component, Input,SimpleChanges,OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnChanges {
  name = new FormControl('');

  @Input()
  public pressure:number =1;

  updateName() {
    this.name.setValue(this.pressure *1.6);
  }

    ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if ( changes.)
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
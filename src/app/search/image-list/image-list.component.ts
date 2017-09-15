import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatrixColumn} from "../../model/matrixColumn.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Component({
  selector: 'image-list',
  styleUrls: ['./image-list.component.css'],
  templateUrl: './image-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageListComponent {

  @Input() imageList: string [];
  @Input() imageList2: string [];

  _matrix = new BehaviorSubject<MatrixColumn[]>([]);

  @Input()
  set matrix(value) {
    this.updateMatrix(value);
  };

  // @Output() slideInOutInCard: EventEmitter<boolean> = new EventEmitter<boolean>();

  updateMatrix(matrix){
    this._matrix.next(matrix);
  }

  get matrix() {
    return this._matrix.getValue();
  }



}

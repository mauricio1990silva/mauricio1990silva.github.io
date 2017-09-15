import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatrixColumn} from "../../model/matrixColumn.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Component({
  selector: 'image-result',
  styleUrls: ['./image-result.component.css'],
  templateUrl: './image-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageResultComponent {

  @Input() matrixResult: MatrixColumn;


}

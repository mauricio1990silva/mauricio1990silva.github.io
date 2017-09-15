import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'current-photo',
  styleUrls: ['./current-photo.component.css'],
  templateUrl: './current-photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentPhotoComponent {

  @Input() _loading = new BehaviorSubject<boolean>(false);
  @Input() _photoUrl = new BehaviorSubject<string>('');

  @Input()
  set loading(value) {
    this._loading.next(value);
  };

  get loading(){
    return this._loading.getValue();
  }

  @Input()
  set photoUrl(value) {
    this._photoUrl.next(value);
  };

  get photoUrl(){
    return this._photoUrl.getValue();
  }
}

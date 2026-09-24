import { Component, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-leader-info',
  styleUrl: './leader-info.css',
  templateUrl: './leader-info.html',
})

export class LeaderInfo {
  leader = input<any>(null!);

  mottoToggled = output<string>();

  showMotto = signal(false);

  toggleMotto() {
    this.showMotto.set(!this.showMotto());
    this.mottoToggled.emit(this.leader().name);
  }
}

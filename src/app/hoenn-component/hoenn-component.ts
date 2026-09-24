import { Component, inject } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info'
import { HoennLeadersService } from '../hoenn-leaders-service';

@Component({
  imports: [ LeaderInfo ],
  standalone: true,
  selector: 'app-hoenn-component',
  styleUrl: './hoenn-component.css',
  templateUrl: './hoenn-component.html',
})

export class HoennComponent {
  private readonly hoennService = inject(HoennLeadersService);

  hoennLeaders = this.hoennService.hoennLeaders;
  leaderCount = this.hoennService.leaderCount;

  lastToggledLeader = '';

  onMottoToggled(leaderName: string) {
    this.lastToggledLeader = leaderName;
  }
}

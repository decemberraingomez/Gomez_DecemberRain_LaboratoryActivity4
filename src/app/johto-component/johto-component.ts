import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  standalone: true,
  selector: 'app-johto-component',
  styleUrl: './johto-component.css',
  templateUrl: './johto-component.html',
})

export class JohtoComponent {
  johtoLeaders = [
    {
      name: 'Falkner',
      age: 17,
      badge: 'Zephyr Badge',
      location: 'Violet City',
      type: 'Flying',
      motto: 'I\'ll show you the real power of the magnificent bird Pokemon!',
      pokemonTeam: [
        { name: 'Pidgeotto', level: 13 },
        { name: 'Pidgey', level: 9 }
      ]
    },
    {
      name: 'Bugsy',
      age: 18,
      badge: 'Hive Badge',
      location: 'Azalea Town',
      type: 'Bug',
      motto: 'I have studied Bug Pokemon all around the world.',
      pokemonTeam: [
        { name: 'Scyther', level: 16 },
        { name: 'Kakuna', level: 14 },
        { name: 'Metapod', level: 14 }
      ]
    },
    {
      name: 'Whitney',
      age: 12,
      badge: 'Plain Badge',
      location: 'Goldenrod City',
      type: 'Normal',
      motto: 'Hey, I never lose! You wanna battle? Let\'s go!',
      pokemonTeam: [
        { name: 'Miltank', level: 19 },
        { name: 'Clefairy', level: 17 }
      ]
    },
    {
      name: 'Morty',
      age: 53,
      badge: 'Fog Badge',
      location: 'Ecruteak City',
      type: 'Ghost',
      motto: 'I can see what you cannot: the shape of things to come.',
      pokemonTeam: [
        { name: 'Gengar', level: 25 },
        { name: 'Haunter', level: 23 },
        { name: 'Gastly', level: 21 }
      ]
    },
    {
      name: 'Chuck',
      age: 64,
      badge: 'Storm Badge',
      location: 'Cianwood City',
      type: 'Fighting',
      motto: 'Hah! You want to challenge me, the man who wrestles wild Pokemon?',
      pokemonTeam: [
        { name: 'Primeape', level: 29 },
        { name: 'Poliwrath', level: 31 }
      ]
    },
    {
      name: 'Jasmine',
      age: 40,
      badge: 'Mineral Badge',
      location: 'Olivine City',
      type: 'Steel',
      motto: 'I\'ve been raising my Pokemon here alone... but I won\'t hold back.',
      pokemonTeam: [
        { name: 'Magnemite', level: 30 },
        { name: 'Steelix', level: 35 }
      ]
    },
    {
      name: 'Pryce',
      age: 50,
      badge: 'Glacier Badge',
      location: 'Mahogany Town',
      type: 'Ice',
      motto: 'Experience is the best teacher, and I have plenty of it.',
      pokemonTeam: [
        { name: 'Seel', level: 30 },
        { name: 'Dewgong', level: 32 },
        { name: 'Piloswine', level: 34 }
      ]
    },
    {
      name: 'Clair',
      age: 20,
      badge: 'Rising Badge',
      location: 'Blackthorn City',
      type: 'Dragon',
      motto: 'I am Clair, the world\'s best trainer of Dragon-type Pokemon.',
      pokemonTeam: [
        { name: 'Dragonair', level: 38 },
        { name: 'Kingdra', level: 41 }
      ]
    }
  ];

  lastToggledLeader = '';

  onMottoToggled(leaderName: string) {
    this.lastToggledLeader = leaderName;
  }
}

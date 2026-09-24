import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  standalone: true,
  selector: 'app-kanto-component',
  styleUrl: './kanto-component.css',
  templateUrl: './kanto-component.html',
})

export class KantoComponent {
  kantoLeaders = [
    {
      name: 'Brock',
      age: 15,
      badge: 'Boulder Badge',
      location: 'Pewter City',
      type: 'Rock',
      motto: 'The best offense is a good defense — that\'s my rock-solid rule.',
      pokemonTeam: [
        { name: 'Onix', level: 14 },
        { name: 'Geodude', level: 12 }
      ]
    },
    {
      name: 'Misty',
      age: 10,
      badge: 'Cascade Badge',
      location: 'Cerulean City',
      type: 'Water',
      motto: 'My policy is an all-out offensive with Water-type Pokemon!',
      pokemonTeam: [
        { name: 'Staryu', level: 18 },
        { name: 'Starmie', level: 21 }
      ]
    },
    {
      name: 'Lt. Surge',
      age: 15, 
      badge: 'Thunder Badge',
      location: 'Vermilion City',
      type: 'Electric',
      motto: 'I tell you, kid, electric Pokemon saved my life!',
      pokemonTeam: [
        { name: 'Voltorb', level: 21 },
        { name: 'Pikachu', level: 18 },
        { name: 'Raichu', level: 24 }
      ]
    },
    {
      name: 'Erika',
      age: 20,
      badge: 'Rainbow Badge',
      location: 'Celadon City',
      type: 'Grass',
      motto: 'Oh! I must have dozed off. Welcome... how can I help you?',
      pokemonTeam: [
        { name: 'Victrebeel', level: 29 },
        { name: 'Tangela', level: 24 },
        { name: 'Vileplume', level: 29 }
      ]
    },
    {
      name: 'Koga',
      age: 30,
      badge: 'Soul Badge',
      location: 'Fuchsia City',
      type: 'Poison',
      motto: 'A ninja should be able to melt into the shadows and vanish.',
      pokemonTeam: [
        { name: 'Koffing', level: 37 },
        { name: 'Muk', level: 39 },
        { name: 'Weezing', level: 43 }
      ]
    },
    {
      name: 'Sabrina',
      age: 21, 
      badge: 'Marsh Badge',
      location: 'Saffron City',
      type: 'Psychic',
      motto: 'I had a vision of your arrival and I have waited for you.',
      pokemonTeam: [
        { name: 'Kadabra', level: 38 },
        { name: 'Mr. Mime', level: 37 },
        { name: 'Venomoth', level: 38 },
        { name: 'Alakazam', level: 43 }
      ]
    },
    {
      name: 'Blaine',
      age: 70,
      badge: 'Volcano Badge',
      location: 'Cinnabar Island',
      type: 'Fire',
      motto: 'Hah! Hope you brought a towel, my Pokemon fight with red-hot moves!',
      pokemonTeam: [
        { name: 'Growlithe', level: 42 },
        { name: 'Ponyta', level: 40 },
        { name: 'Rapidash', level: 41 },
        { name: 'Arcanine', level: 47 }
      ]
    },
    {
      name: 'Giovanni',
      age: 34,
      badge: 'Earth Badge',
      location: 'Viridian City',
      type: 'Ground',
      motto: 'So! I must say, I am impressed you got here. But this is where it ends.',
      pokemonTeam: [
        { name: 'Rhyhorn', level: 45 },
        { name: 'Dugtrio', level: 42 },
        { name: 'Nidoqueen', level: 44 },
        { name: 'Nidoking', level: 45 },
        { name: 'Rhydon', level: 50 }
      ]
    }
  ];

  lastToggledLeader = '';

  onMottoToggled(leaderName: string) {
    this.lastToggledLeader = leaderName;
  }
}

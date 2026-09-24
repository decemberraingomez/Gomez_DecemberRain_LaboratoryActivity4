import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HoennLeadersService {
  private readonly hoennLeadersSignal = signal([
    {
      name: 'Roxanne',
      badge: 'Stone Badge',
      location: 'Rustboro City',
      type: 'Rock',
      motto: 'I study battle theory at the Trainer\'s School, now let me show you what I\'ve learned!',
      pokemonTeam: [
        { name: 'Geodude', level: 12 },
        { name: 'Nosepass', level: 15 }
      ]
    },
    {
      name: 'Brawly',
      badge: 'Knuckle Badge',
      location: 'Dewford Town',
      type: 'Fighting',
      motto: 'I ride the big waves and train hard, can you handle the swell of my Fighting Pokemon?',
      pokemonTeam: [
        { name: 'Machop', level: 17 },
        { name: 'Makuhita', level: 18 }
      ]
    },
    {
      name: 'Wattson',
      badge: 'Dynamo Badge',
      location: 'Mauville City',
      type: 'Electric',
      motto: 'Wahahahah! Get ready for a jolt of electrifying fun!',
      pokemonTeam: [
        { name: 'Magnemite', level: 22 },
        { name: 'Voltorb', level: 20 },
        { name: 'Magneton', level: 23 }
      ]
    },
    {
      name: 'Flannery',
      badge: 'Heat Badge',
      location: 'Lavaridge Town',
      type: 'Fire',
      motto: 'I may be new as Gym Leader, but my Fire Pokemon burn just as hot!',
      pokemonTeam: [
        { name: 'Slugma', level: 26 },
        { name: 'Slugma', level: 26 },
        { name: 'Torkoal', level: 28 }
      ]
    },
    {
      name: 'Norman',
      badge: 'Balance Badge',
      location: 'Petalburg City',
      type: 'Normal',
      motto: 'As a Gym Leader and as a father, I will give this battle everything I have.',
      pokemonTeam: [
        { name: 'Slaking', level: 28 },
        { name: 'Vigoroth', level: 30 },
        { name: 'Slaking', level: 31 }
      ]
    },
    {
      name: 'Winona',
      badge: 'Feather Badge',
      location: 'Fortree City',
      type: 'Flying',
      motto: 'My bird Pokemon and I soar together. Witness our elegant flight!',
      pokemonTeam: [
        { name: 'Swablu', level: 29 },
        { name: 'Pelipper', level: 30 },
        { name: 'Skarmory', level: 32 },
        { name: 'Altaria', level: 33 }
      ]
    },
    {
      name: 'Tate & Liza',
      badge: 'Mind Badge',
      location: 'Mossdeep City',
      type: 'Psychic',
      motto: 'Our minds are linked as one, can you beat our perfect teamwork?',
      pokemonTeam: [
        { name: 'Lunatone', level: 42 },
        { name: 'Solrock', level: 42 }
      ]
    },
    {
      name: 'Wallace',
      badge: 'Rain Badge',
      location: 'Sootopolis City',
      type: 'Water',
      motto: 'Allow me to show you the elegance of Water Pokemon in battle.',
      pokemonTeam: [
        { name: 'Luvdisc', level: 40 },
        { name: 'Whiscash', level: 42 },
        { name: 'Sealeo', level: 40 },
        { name: 'Seaking', level: 42 },
        { name: 'Milotic', level: 43 }
      ]
    }
  ]);

  // Public read-only view of the data that components can render.
  readonly hoennLeaders = this.hoennLeadersSignal.asReadonly();

  // Derived value computed from the private signal.
  readonly leaderCount = computed(() => this.hoennLeadersSignal().length);

  getLeaderByName(name: string) {
    return this.hoennLeadersSignal().find(leader => leader.name === name);
  }
}

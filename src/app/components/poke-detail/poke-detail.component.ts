import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = '[]';
  pokemonAbility = '[]';
  pokemonMoves1 = '[]';
  pokemonMoves2 = '[]';
  pokemonMoves3 = '[]';
  pokemonMoves4 = '[]';
  pokemonLife = '[]';
  pokemonSpeed = '[]';
  pokemonAttack = '[]';
  pokemonAttackSpecial = '[]';
  pokemonDefense = '[]';
  pokemonDefenseSpecial = '[]';
  stats1 = '[]';
  pokemonImg = '';


  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id){
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;        
        this.pokemonAbility = res.abilities[0].ability.name;
        this.pokemonMoves1 = res.moves[0].move.name;
        this.pokemonMoves2 = res.moves[1].move.name;
        this.pokemonMoves3 = res.moves[2].move.name;
        this.pokemonMoves4 = res.moves[3].move.name;
        this.pokemonLife = res.stats[0].base_stat;
        this.pokemonSpeed = res.stats[5].base_stat;
        this.pokemonAttack = res.stats[1].base_stat;
        this.pokemonAttackSpecial = res.stats[3].base_stat;
        this.pokemonDefense = res.stats[2].base_stat;
        this.pokemonDefenseSpecial = res.stats[4].base_stat;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}

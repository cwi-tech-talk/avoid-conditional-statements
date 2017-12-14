let hashcode = obj => JSON.stringify(obj);
let evaluate = (args, key) => hashcode(args) === hashcode(key);

let strategies = [
    { evaluate: args => evaluate(args, { genero: 'corrida' }), value: 'Top Gear'},
    { evaluate: args => evaluate(args, { genero: 'corrida', plataforma: 'xbox' }), value: 'Forza Motorsport'},
    { evaluate: args => evaluate(args, { genero: 'estratégia' }), value: 'Tactics Ogre'},
    { evaluate: args => evaluate(args, { experiencia: 'casual' }), value: 'Candy Crush'},
    { evaluate: args => evaluate(args, { plataforma: 'pc' }), value: 'Team Fortress'},
    { evaluate: args => evaluate(args, { ambiente: 'medieval' }), value: 'The Lord Of The Rings'},
    { evaluate: args => evaluate(args, { experiencia: 'hardcore', plataforma: 'pc', ambiente: 'medieval' }), value: 'Dark Souls'},
    { evaluate: args => evaluate(args, { ambiente: 'fantasia' }), value: 'Chrono Trigger'},
    { evaluate: args => evaluate(args, { ambiente: 'fantasia', experiencia: 'hardcore', plataforma: 'ps' }), value: 'Kingdom Hearts'},
    { evaluate: args => evaluate(args, { ambiente: 'fantasia', experiencia: 'hardcore', genero: 'estrategia' }), value: 'Final Fantasy Tactics'}
];

/**
 * Sistema de recomendação de Jogos
 *
 * Usuário informa algumas informações sobre seus interesses em jogos,
 * então o sistema sugere um jogo que atenda ao gosto do usuário.
 *
 * arg: interesses {
 *   genero: 'aventura' | 'corrida' | 'fps' | 'esporte' | 'rpg' | 'estratégia',
 *   experiencia: 'casual' | 'moderado' | 'hardcore',
 *   ambiente: 'scifi' | 'medieval' | 'fantasia' | 'atual',
 *   plataforma: 'pc' | 'ps' | 'xbox'
 * }
 *
 * returns [string] nome do jogo
 */

module.exports = function recomendarJogo(interesse) {

    let strategy = strategies.find(s => s.evaluate(interesse));
    if (strategy) {
        return strategy.value;
    }

 }

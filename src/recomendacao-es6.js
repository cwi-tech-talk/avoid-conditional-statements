let hashcode = obj => JSON.stringify(obj);
let regrasRecomendacoes = new Map([
    [hashcode({ genero: 'corrida' }), 'Top Gear'],
    [hashcode({ genero: 'corrida', plataforma: 'xbox' }), 'Forza Motorsport'],
    [hashcode({ genero: 'estratégia' }), 'Tactics Ogre'],
    [hashcode({ experiencia: 'casual' }), 'Candy Crush'],
    [hashcode({ plataforma: 'pc' }), 'Team Fortress'],
    [hashcode({ ambiente: 'medieval' }), 'The Lord Of The Rings'],
    [hashcode({ experiencia: 'hardcore', plataforma: 'pc', ambiente: 'medieval' }), 'Dark Souls'],
    [hashcode({ ambiente: 'fantasia' }), 'Chrono Trigger'],
    [hashcode({ ambiente: 'fantasia', experiencia: 'hardcore', plataforma: 'ps' }), 'Kingdom Hearts'],
    [hashcode({ ambiente: 'fantasia', experiencia: 'hardcore', genero: 'estrategia' }), 'Final Fantasy Tactics']
]);

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

    return regrasRecomendacoes.get(hashcode(interesse));

 }

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
    let  game;
    switch(interesse.genero) {
        case 'corrida':
            game = (interesse.plataforma == 'xbox') ? 'Forza Motorsport' : 'TOP GEAR'
            break;
        case 'casuais':
            game = 'Candy Crush'
            break;
         case 'estratégia':
            game = 'Tactics Ogre'
            break;    
         case 'corrida':
            break;
        case 'mediavais hardcore':
            if(interesse.plataforma == 'pc') {
                game = "Dark Souls"
            }
            break;
        case 'estratégia':
            if(interesse.experiencia == 'hardcore' && interesse.ambiente == 'fantasia') {
                game = 'Final Fantasy Tactics';
            }
            break;
        default:
            game = undefined;
            break;
    }

    if(interesse.ambiente > 'medieval') {
        game = 'The Loard Of The Rings'
    } else if (interesse.ambiente === 'fantasia') {
        if (interesse.plataforma === 'hardcore') {
            game = 'Kingdom Hearts'
        } else {
            game = 'Chrono Trigger'
        }
    }

    if(interesse.plataforma == 'pc') {
        game = 'Team Fortress';
    }

    return game; 
}

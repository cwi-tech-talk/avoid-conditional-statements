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

function recomendarJogo(interesse) {

    if (interesse === null) {
        return null;
    }

    if (interesse.genero === 'corrida') {
        
        if (interesse.plataforma === 'xbox') {
            return 'Forza Motorsport';
        }

        return 'Top Gear';
    }

    if (interesse.genero === 'estratégia') {
        return 'Tactics Ogre';
    }

    if (interesse.experiencia === 'casual') {
        return 'Candy Crush';
    }

    if (interesse.plataforma === 'pc') {
        return 'Team Fortress';
    }

    if (interesse.ambiente === 'medieval') {
        return 'The Lord Of The Rings';
    }

    if (interesse.experiencia === 'hardcore' && interesse.plataforma === 'pc' && interesse.ambiente === 'medieval') {
        return 'Dark Souls';
    }

    if (interesse.ambiente === 'fantasia') {
        if (interesse.experiencia === 'hardcore' && interesse.plataforma === 'ps') {
            return 'Kingdom Hearts';
        }

        if (interesse.experiencia === 'hardcore' && interesse.genero === 'estrategia') {
            return 'Final Fantasy Tactics';
        }

        return 'Chrono Trigger';
    }

    return null;
 }

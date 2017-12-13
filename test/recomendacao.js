let t = require('tap');

module.exports = function test(target, id) {
    
    console.log(`### ${id} ###`);
    console.log(`------------------`);
  
    t.equal(target({ genero: 'corrida' }), 'Top Gear', 'Top Gear > gênero corrida');
    t.equal(target({ genero: 'estratégia' }), 'Tactics Ogre', 'Tactics Ogre > gênero estratégia');
    t.equal(target({ experiencia: 'casual' }), 'Candy Crush', 'Candy Crush > experiência casual');
    t.equal(target({ genero: 'corrida', plataforma: 'xbox' }), 'Forza Motorsport', 'Forza Motorsport > gênero corrida + plataforma xbox');
    t.equal(target({ plataforma: 'pc' }), 'Team Fortress', 'Team Fortress > plataforma pc');
    t.equal(target({ ambiente: 'medieval' }), 'The Lord Of The Rings', 'The Lord Of The Rings > ambiente medieval');
    t.equal(target({ experiencia: 'hardcore', plataforma: 'pc', ambiente: 'medieval' }), 'Dark Souls', 'Dark Souls > plataforma pc + experiência hardcore + ambiente medieval');
    t.equal(target({ ambiente: 'fantasia' }), 'Chrono Trigger', 'Chrono Trigger > ambiente fantasia');
    t.equal(target({ ambiente: 'fantasia', experiencia: 'hardcore', plataforma: 'ps' }), 'Kingdom Hearts', 'Kingdom Hearts > ambiente fantasia + experiência hardcore + plataforma ps');
    t.equal(target({ ambiente: 'fantasia', experiencia: 'hardcore', genero: 'estrategia' }), 'Final Fantasy Tactics', 'Final Fantasy Tactics > gênero estrategia + experiência hardcore + ambiente fantasia');
  
    t.equal(target(null), undefined, 'undefined > Interesses não informados');
    t.equal(target({ genero: 'mmorpg' }), undefined, 'undefined > Regra não atendida (MMORPG)');

    console.log('');
    
}

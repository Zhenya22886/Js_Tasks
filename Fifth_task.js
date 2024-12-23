const EventEmitter = require('events');

class MonsterEventEmitter extends EventEmitter {}
const monsterEvents = new MonsterEventEmitter();

const monsterActions = [
  { event: 'spotted', message: 'Монстр з\'явився!' },
  { event: 'attacking', message: 'Монстр атакує!' },
  { event: 'defeated', message: 'Монстр помер' },
  { event: 'fleeing', message: 'Монстр утікає!' },
];

monsterEvents.on('spotted', () => {
  setTimeout(() => {
    console.log('Гравець бачить монстра. Приготуйся до битви!');
  }, 500); 
});

monsterEvents.on('attacking', () => {
  setTimeout(() => {
    console.log('Монстр завдає удару! Захищайся!');
  }, 500); 
});

monsterEvents.on('defeated', () => {
  setTimeout(() => {
    console.log('Вітаємо! Монстр переможений!');
  }, 500); 
});

monsterEvents.on('fleeing', () => {
  setTimeout(() => {
    console.log('Монстр утікає. Можеш переслідувати або відпочити.');
  }, 500); 
});


function simulateMonsterEvents(events) {
  let delay = 1000; 

  events.forEach((action) => {
    setTimeout(() => {
      console.log(`Подія: ${action.message}`);
      monsterEvents.emit(action.event);
    }, delay);
    delay += 2000; 
  });
}

simulateMonsterEvents(monsterActions);

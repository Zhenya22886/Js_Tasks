function asyncFilter(array, asyncCallback, finalCallback) {
  const StrongMonsters = [];
  let completedTasks = 0;

  array.forEach((item, index) => {
    asyncCallback(item, (error, shouldInclude) => {
      if (shouldInclude) {
        StrongMonsters.push(item);
      }

      completedTasks++;

      if (completedTasks === array.length) {
        finalCallback(null, StrongMonsters);
      }
    });
  });
}

const monstersArray = [
  { name: "Goblin", level: 5 },
  { name: "Dragon", level: 20 },
  { name: "Troll", level: 8 },
  { name: "Phoenix", level: 25 },
  { name: "Slime", level: -3 },
  { name: "Orc", level: 15 },
  { name: "Wolf", level: 7 }
];

function isLevelGreaterThanTenAsync(monster, callback) {
  setTimeout(() => {
    callback(null, monster.level > 10);
  }, 1000);
}

asyncFilter(monstersArray, isLevelGreaterThanTenAsync, (error, results) => {
  console.log("Монстрів яких ми не можем перемогти:");
  results.forEach(monster => console.log(`${monster.name} (Рівень: ${monster.level})`));
});

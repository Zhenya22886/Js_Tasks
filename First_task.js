function asyncFilter(array, asyncCallback, finalCallback) {
    const StrongMonsters = [];
    let completedTasks = 0;
    let encounteredError = false;
  
    array.forEach((item) => {
      asyncCallback(item, (error, shouldInclude) => {
        if (encounteredError) return;
  
        if (error) {
          encounteredError = true;
          return finalCallback(error, null);
        }
  
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
  
  function isLevelGreaterThanTenAsync(monster, callback) {
    setTimeout(() => {
      if (monster.level < 0) {
        return callback(
          new Error(`Монстр ${monster.name} має негативний рівень (${monster.level})`),
          null
        );
      }
  
      callback(null, monster.level > 10);
    }, 1000);
  }
  
  const monstersArray = [
    { name: "Goblin", level: 5 },
    { name: "Dragon", level: 20 },
    { name: "Troll", level: 8 },
    { name: "Phoenix", level: 25 },
    { name: "Slime", level: 3 },
    { name: "Orc", level: 15 },
    { name: "Wolf", level: 7 },
  ];
  
  asyncFilter(monstersArray, isLevelGreaterThanTenAsync, (error, results) => {
    if (error) {
      console.error("Сталася помилка:", error.message);
    } else {
      console.log("Монстрів яких ми не можем перемогти:");
      results.forEach((monster) => console.log(`${monster.name} (Рівень: ${monster.level})`));
    }
  });
  
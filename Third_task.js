function asyncFilter(array, asyncCallback, signal) {
    return new Promise((resolve, reject) => {
      const filteredResults = [];
      let completedTasks = 0;
      let encounteredError = false;
  
      if (signal) {
        signal.addEventListener("abort", () => {
          encounteredError = true;
          reject(new Error("Фільтрацію скасовано"));
        });
      }
  
      array.forEach((item) => {
        if (encounteredError) return;
  
        asyncCallback(item, (error, shouldInclude) => {
          if (encounteredError) return;
  
          if (error) {
            encounteredError = true;
            return reject(error);
          }
  
          if (shouldInclude) {
            filteredResults.push(item);
          }
  
          completedTasks++;
  
          if (completedTasks === array.length) {
            resolve(filteredResults);
          }
        });
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
  
  const controller = new AbortController();
  const signal = controller.signal;
  
  setTimeout(() => controller.abort(), 3000);
  
  asyncFilter(monstersArray, isLevelGreaterThanTenAsync, signal)
    .then((results) => {
      console.log("Монстрів яких ми не можем перемогти:");
      results.forEach((monster) => console.log(`${monster.name} (Рівень: ${monster.level})`));
    })
    .catch((error) => {
      console.error("Сталася помилка:", error.message);
    });
  
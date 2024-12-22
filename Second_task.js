function asyncFilter(array, asyncCallback) {
    return Promise.all(
      array.map((item) => {
        return new Promise((resolve, reject) => {
          asyncCallback(item, (error, shouldInclude) => {
            if (error) {
              return reject(error);
            }
            resolve(shouldInclude ? item : null);
          });
        });
      })
    ).then((results) => results.filter((item) => item !== null));
  }
  
  function isLevelGreaterThanTenAsync(monster, callback) {
    setTimeout(() => {
      if (monster.level < 0) {
        return callback(new Error(`Монстр ${monster.name} має негативний рівень (${monster.level})`), null);
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
  
  asyncFilter(monstersArray, isLevelGreaterThanTenAsync)
    .then((results) => {
      console.log("Монстрів яких ми не можем перемогти:");
      results.forEach((monster) => console.log(`${monster.name} (Рівень: ${monster.level})`));
    })
    .catch((error) => {
      console.error("Сталася помилка:", error.message);
    });
  
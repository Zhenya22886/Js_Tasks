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
  
  const controller = new AbortController();
  const signal = controller.signal;
  
  setTimeout(() => controller.abort(), 3000); // Автоматичне скасування через 3 секунди
  
  asyncFilter(monstersArray, isLevelGreaterThanTenAsync, signal)
    .then((results) => {
      console.log("Монстрів яких ми не можем перемогти:");
      results.forEach((monster) => console.log(`${monster.name} (Рівень: ${monster.level})`));
    })
    .catch((error) => {
      console.error("Сталася помилка:", error.message);
    });
  
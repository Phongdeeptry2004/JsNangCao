function calcAverageHumanAge(ages) {
    // Bước 1: Tính tuổi của chó theo tuổi của con người
    const dogAgesInHumanYears = ages.map((dogAge) => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4));
  
    // Bước 2: Loại trừ chó dưới 18 tuổi
    const filteredDogAges = dogAgesInHumanYears.filter((dogAge) => dogAge > 18);
    console.log(filteredDogAges);
  
    // Bước 3: Tính tuổi trung bình của chó trưởng thành
    const averageDogAge = filteredDogAges.reduce((sum, age) => sum + age, 0) / filteredDogAges.length;
  
    return averageDogAge;
  }
  
  // TEST DATA 1
  const testData1 = [5, 2, 4, 1, 15, 8, 3];
  const result1 = calcAverageHumanAge(testData1);
  console.log(`Tuổi trung bình của chó theo tuổi người (TEST DATA 1): ${result1}`);
  
  // TEST DATA 2
  const testData2 = [16, 6, 10, 5, 6, 1, 4];
  const result2 = calcAverageHumanAge(testData2);
  console.log(`Tuổi trung bình của chó theo tuổi người (TEST DATA 2): ${result2}`);
  
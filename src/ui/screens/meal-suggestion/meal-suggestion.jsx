import React, { useState } from "react";

const foods = [
  { name: "Ovo", grams: 100, calories: 155, fat: 11, carbs: 1.1, protein: 13 },
  {
    name: "Carne (Patinho)",
    grams: 100,
    calories: 250,
    fat: 17,
    carbs: 0,
    protein: 26,
  },
  {
    name: "Frango",
    grams: 100,
    calories: 165,
    fat: 3.6,
    carbs: 0,
    protein: 31,
  },
  { name: "Tilápia", grams: 100, calories: 96, fat: 2, carbs: 0, protein: 20 },
  {
    name: "Whey Concentrado",
    grams: 100,
    calories: 400,
    fat: 6,
    carbs: 10,
    protein: 80,
  },
  {
    name: "Massa Espaguete",
    grams: 100,
    calories: 158,
    fat: 0.9,
    carbs: 31,
    protein: 5.8,
  },
  {
    name: "Batata Inglesa",
    grams: 100,
    calories: 77,
    fat: 0.1,
    carbs: 17,
    protein: 2,
  },
  {
    name: "Arroz",
    grams: 100,
    calories: 130,
    fat: 0.3,
    carbs: 28,
    protein: 2.7,
  },
  {
    name: "Massa Penne",
    grams: 100,
    calories: 157,
    fat: 0.9,
    carbs: 30.9,
    protein: 5.9,
  },
  {
    name: "Azeite de Oliva",
    grams: 100,
    calories: 884,
    fat: 100,
    carbs: 0,
    protein: 0,
  },
  { name: "Abacate", grams: 100, calories: 160, fat: 15, carbs: 9, protein: 2 },
  {
    name: "Amêndoas",
    grams: 100,
    calories: 579,
    fat: 50,
    carbs: 22,
    protein: 21,
  },
  {
    name: "Castanha-do-Pará",
    grams: 100,
    calories: 656,
    fat: 66,
    carbs: 12,
    protein: 14,
  },
];

export function MealSuggestion() {
  const [meals, setMeals] = useState(1);
  const [proteinGoal, setProteinGoal] = useState(0);
  const [carbGoal, setCarbGoal] = useState(0);
  const [fatGoal, setFatGoal] = useState(0);
  const [mealPlan, setMealPlan] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [replacementOptions, setReplacementOptions] = useState([]);

  function categorizeFoods() {
    const proteins = foods.filter(
      (food) => food.protein > food.carbs && food.protein > food.fat
    );
    const carbs = foods.filter(
      (food) => food.carbs > food.protein && food.carbs > food.fat
    );
    const fats = foods.filter(
      (food) => food.fat > food.protein && food.fat > food.carbs
    );
    return { proteins, carbs, fats };
  }

  function generateMealPlan() {
    const { proteins, carbs, fats } = categorizeFoods();
    const newMealPlan = [];

    const proteinPerMeal = proteinGoal / meals;
    const carbsPerMeal = carbGoal / meals;
    const fatPerMeal = fatGoal / meals;

    const selectedProteins = [];
    let totalFatFromProteins = 0;

    for (let i = 0; i < meals; i++) {
      const randomProtein =
        proteins[Math.floor(Math.random() * proteins.length)];
      const gramsToAdd = (proteinPerMeal / randomProtein.protein) * 100;
      const proteinItem = {
        ...randomProtein,
        grams: gramsToAdd,
        calories: (randomProtein.calories / 100) * gramsToAdd,
        fat: (randomProtein.fat / 100) * gramsToAdd,
        carbs: (randomProtein.carbs / 100) * gramsToAdd,
        protein: (randomProtein.protein / 100) * gramsToAdd,
      };

      totalFatFromProteins += proteinItem.fat;
      selectedProteins.push(proteinItem);
    }

    const selectedCarbs = [];
    for (let i = 0; i < meals; i++) {
      const randomCarb = carbs[Math.floor(Math.random() * carbs.length)];
      const gramsToAdd = carbsPerMeal / (randomCarb.carbs / 100);
      selectedCarbs.push({
        ...randomCarb,
        grams: gramsToAdd,
        calories: (randomCarb.calories / 100) * gramsToAdd,
        fat: (randomCarb.fat / 100) * gramsToAdd,
        carbs: (randomCarb.carbs / 100) * gramsToAdd,
        protein: (randomCarb.protein / 100) * gramsToAdd,
      });
    }

    const adjustedFatGoal = fatGoal - totalFatFromProteins;
    const fatPerMealAdjusted = adjustedFatGoal / meals;

    const selectedFats = [];
    for (let i = 0; i < meals; i++) {
      const randomFat = fats[Math.floor(Math.random() * fats.length)];
      const gramsToAdd = fatPerMealAdjusted / (randomFat.fat / 100);
      selectedFats.push({
        ...randomFat,
        grams: gramsToAdd,
        calories: (randomFat.calories / 100) * gramsToAdd,
        fat: (randomFat.fat / 100) * gramsToAdd,
        carbs: (randomFat.carbs / 100) * gramsToAdd,
        protein: (randomFat.protein / 100) * gramsToAdd,
      });
    }

    for (let i = 0; i < meals; i++) {
      const meal = [selectedProteins[i], selectedCarbs[i], selectedFats[i]];

      const totalProtein = meal.reduce((sum, food) => sum + food.protein, 0);
      if (totalProtein > proteinPerMeal) {
        const excessProtein = totalProtein - proteinPerMeal;
        const proteinFood = meal.find(
          (food) => food.protein === Math.max(...meal.map((f) => f.protein))
        );
        let originalFood = foods.find((food) => food.name == proteinFood.name);
        proteinFood.grams -= (excessProtein / originalFood.protein) * 100;
        proteinFood.protein -= excessProtein;
      }

      newMealPlan.push(meal);
    }

    setMealPlan(newMealPlan);
  }

  function handleSubstitute(food, macronutrientType) {
    const { proteins, carbs, fats } = categorizeFoods();

    let options = [];
    if (macronutrientType === "protein") {
      options = proteins;
    } else if (macronutrientType === "carb") {
      options = carbs;
    } else if (macronutrientType === "fat") {
      options = fats;
    }

    setSelectedFood(food);
    setReplacementOptions(options);
  }

  function replaceFood(newFood) {
    const { name, protein, carbs, fat } = selectedFood;
    const macronutrientType =
      protein > carbs && protein > fat
        ? "protein"
        : carbs > protein && carbs > fat
        ? "carb"
        : "fat";

    const gramsToMatch = selectedFood.grams;
    const newGrams =
      gramsToMatch *
      (newFood[macronutrientType] / selectedFood[macronutrientType]);

    const updatedMealPlan = mealPlan.map((meal) =>
      meal.map((item) =>
        item.name === name ? { ...newFood, grams: newGrams } : item
      )
    );

    setMealPlan(updatedMealPlan);
    setSelectedFood(null);
    setReplacementOptions([]);
  }

  function getMacronutrientType(food) {
    if (food.protein > food.carbs && food.protein > food.fat) {
      return "protein";
    } else if (food.carbs > food.protein && food.carbs > food.fat) {
      return "carb";
    } else {
      return "fat";
    }
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold mb-4 flex justify-center">
        Configurações de Meta
      </h2>

      <div className="mb-4 flex items-center justify-center">
        <label className="mr-4">Refeições por dia:</label>
        <div className="flex items-center ">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded-3xl focus:outline-none"
            onClick={() => setMeals((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <span className="px-4 py-1 text-center">{meals}</span>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded-3xl focus:outline-none"
            onClick={() => setMeals((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-4 max-w-60 ">
        <label className="block mb-2">Meta de Proteína (g):</label>
        <input
          type="number"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={proteinGoal}
          onChange={(e) => setProteinGoal(parseFloat(e.target.value))}
        />
      </div>

      <div className="mb-4 max-w-60">
        <label className="block mb-2">Meta de Carboidrato (g):</label>
        <input
          type="number"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={carbGoal}
          onChange={(e) => setCarbGoal(parseFloat(e.target.value))}
        />
      </div>

      <div className="mb-4 max-w-60">
        <label className="block mb-2">Meta de Gordura (g):</label>
        <input
          type="number"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fatGoal}
          onChange={(e) => setFatGoal(parseFloat(e.target.value))}
        />
      </div>

      <button
        className="px-4 py-2 bg-green-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={generateMealPlan}
      >
        Gerar Plano de Refeições
      </button>

      {mealPlan.length > 0 && (
        <div className="mt-6 flex">
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Totais Diários</h3>
            <p className="text-lg">
              Proteína:{" "}
              {mealPlan
                .flat()
                .reduce((sum, food) => sum + food.protein, 0)
                .toFixed(2)}
              g
            </p>
            <p className="text-lg">
              Carboidratos:{" "}
              {mealPlan
                .flat()
                .reduce((sum, food) => sum + food.carbs, 0)
                .toFixed(2)}
              g
            </p>
            <p className="text-lg">
              Gordura:{" "}
              {mealPlan
                .flat()
                .reduce((sum, food) => sum + food.fat, 0)
                .toFixed(2)}
              g
            </p>
            <p className="text-lg">
              Calorias:{" "}
              {mealPlan
                .flat()
                .reduce((sum, food) => sum + food.calories, 0)
                .toFixed(2)}
              kcal
            </p>
          </div>
          <h3 className="text-2xl font-bold">Plano de Refeições</h3>
          {mealPlan.map((meal, mealIndex) => (
            <div key={mealIndex} className="mt-4">
              <h4 className="text-xl font-semibold">
                Refeição {mealIndex + 1}
              </h4>
              {meal.map((food, foodIndex) => (
                <div key={foodIndex} className="mb-2">
                  <p className="text-lg text-lime-500">
                    {food.name}: {food.grams.toFixed(2)}g
                  </p>
                  <p>Proteína: {food.protein.toFixed(2)}g</p>
                  <p>Carboidratos: {food.carbs.toFixed(2)}g</p>
                  <p>Gordura: {food.fat.toFixed(2)}g</p>
                  <p>Calorias: {food.calories.toFixed(2)}kcal</p>
                  <button
                    className="px-2 py-1 bg-yellow-500 text-white rounded mt-2"
                    onClick={() =>
                      handleSubstitute(food, getMacronutrientType(food))
                    }
                  >
                    Substituir
                  </button>
                </div>
              ))}
            </div>
          ))}

          {selectedFood && replacementOptions.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                Substituir {selectedFood.name}
              </h3>
              <ul>
                {replacementOptions.map((food, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    {food.name}
                    <button
                      className="px-2 py-1 bg-green-500 text-white rounded ml-2"
                      onClick={() => replaceFood(food)}
                    >
                      Substituir por este
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

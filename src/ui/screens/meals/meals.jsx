import React, { useState, useEffect } from 'react';

export function Meals() {
  const [foods, setFoods] = useState([
    {
      nome: 'Arroz',
      data_consumo: '2024-10-16',
      refeicao: 1,
      carboidratos: 40,
      proteinas: 4,
      gorduras: 1,
      quantidade: 100,
      acucar: 0,
      calorias: 180,
    },
    {
      nome: 'Frango',
      data_consumo: '2024-10-16',
      refeicao: 1,
      carboidratos: 0,
      proteinas: 31,
      gorduras: 4,
      quantidade: 100,
      acucar: 0,
      calorias: 165,
    },
    {
      nome: 'Abacate',
      data_consumo: '2024-10-16',
      refeicao: 2,
      carboidratos: 9,
      proteinas: 2,
      gorduras: 15,
      quantidade: 100,
      acucar: 1,
      calorias: 160,
    },
    {
      nome: 'Ovo Cozido',
      data_consumo: '2024-10-16',
      refeicao: 2,
      carboidratos: 1,
      proteinas: 6,
      gorduras: 5,
      quantidade: 60,
      acucar: 0,
      calorias: 77,
    },
    {
      nome: 'Salada Verde',
      data_consumo: '2024-10-16',
      refeicao: 3,
      carboidratos: 4,
      proteinas: 1,
      gorduras: 0,
      quantidade: 100,
      acucar: 0,
      calorias: 20,
    },
    {
      nome: 'Salmão Grelhado',
      data_consumo: '2024-10-16',
      refeicao: 3,
      carboidratos: 0,
      proteinas: 25,
      gorduras: 12,
      quantidade: 150,
      acucar: 0,
      calorias: 280,
    },
  ]);

  const [totals, setTotals] = useState({
    totalCalories: 0,
    totalCarbohydrates: 0,
    totalProteins: 0,
    totalFats: 0,
  });

  useEffect(() => {
    const totalCalories = foods.reduce((sum, food) => sum + food.calorias, 0);
    const totalCarbohydrates = foods.reduce((sum, food) => sum + food.carboidratos, 0);
    const totalProteins = foods.reduce((sum, food) => sum + food.proteinas, 0);
    const totalFats = foods.reduce((sum, food) => sum + food.gorduras, 0);

    setTotals({
      totalCalories,
      totalCarbohydrates,
      totalProteins,
      totalFats,
    });
  }, [foods]);

  function handleInsertMeal() {
    const newMeal = {
      nome: 'Feijão',
      data_consumo: '2024-10-16',
      refeicao: 3,
      carboidratos: 22,
      proteinas: 9,
      gorduras: 0,
      quantidade: 150,
      acucar: 1,
      calorias: 120,
    };
    setFoods([...foods, newMeal]);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 bg-black text-white p-2 rounded-lg">Lista de Alimentos Consumidos</h1>
        {[1, 2, 3].map((refeicao) => (
          <div key={refeicao} className="mb-8">
            <h2 className="text-xl font-bold mb-4">Refeição {refeicao}</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-lime-700">
                  <th className="py-2 px-4 text-left">Nome</th>
                  <th className="py-2 px-4 text-left">Data de Consumo</th>
                  <th className="py-2 px-4 text-left">Carboidratos (g)</th>
                  <th className="py-2 px-4 text-left">Proteínas (g)</th>
                  <th className="py-2 px-4 text-left">Gorduras (g)</th>
                  <th className="py-2 px-4 text-left">Açúcar (g)</th>
                  <th className="py-2 px-4 text-left">Calorias</th>
                  <th className="py-2 px-4 text-left">Quantidade (g)</th>
                </tr>
              </thead>
              <tbody>
                {foods
                  .filter((food) => food.refeicao === refeicao)
                  .map((food, index) => (
                    <tr key={index} className="border-t bg-lime-600">
                      <td className="py-2 px-4">{food.nome}</td>
                      <td className="py-2 px-4">{food.data_consumo}</td>
                      <td className="py-2 px-4">{food.carboidratos}</td>
                      <td className="py-2 px-4">{food.proteinas}</td>
                      <td className="py-2 px-4">{food.gorduras}</td>
                      <td className="py-2 px-4">{food.acucar}</td>
                      <td className="py-2 px-4">{food.calorias}</td>
                      <td className="py-2 px-4">{food.quantidade}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="mt-6 bg-black text-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Totais</h2>
          <p className="mt-2">Calorias: {totals.totalCalories} kcal</p>
          <p>Carboidratos: {totals.totalCarbohydrates} g</p>
          <p>Proteínas: {totals.totalProteins} g</p>
          <p>Gorduras: {totals.totalFats} g</p>
        </div>

        <button
          onClick={handleInsertMeal}
          className="mt-4 bg-lime-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Inserir Refeição
        </button>
      </div>
    </div>
  );
}

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function fetchMeals(letter = 'c') {
  const response = await fetch(`${BASE_URL}/search.php?s=${letter}`)

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`)
  }

  const data = await response.json()

  if (!data.meals) {
    return []
  }

  return data.meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory,
    origin: meal.strArea,
    image: meal.strMealThumb,
  }))
}

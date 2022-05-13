import axios from 'axios'

export async function postRating(recipeId: any, rating: any){
    try{
      const response = await axios.post(`http://localhost:3000/recipes/${recipeId}/ratings`, {rating: rating})
      return response
    } catch (error: any){
      return error.response
    }
  }




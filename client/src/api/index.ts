import axios from 'axios'

export async function postRating(recipeId: any, rating: any){
    try{
      const response = await axios.post(`https://web-production-a108.up.railway.app/recipes/${recipeId}/ratings`, {rating: rating})
      return response
    } catch (error: any){
      return error.response
    }
  }




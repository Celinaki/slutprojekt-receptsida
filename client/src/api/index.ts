import axios from 'axios'

export async function postRating(recipeId: any, rating: any){
    try{
      const response = await axios.post(`https://frozen-meadow-83935.herokuapp.com/recipes/${recipeId}/ratings`, {rating: rating})
      return response
    } catch (error: any){
      return error.response
    }
  }




import mongoose, {Schema} from "mongoose";
import Irecipe from "../interface/recipe"

const recipeSchema: Schema = new Schema ({
    title:{type:String, required:true},
    description:{type:String,required:true},
    imageUrl:{type:String, required:true},
    timeInMins:{type:Number, required:true},
    ratings:{type:[], required:true},
    ingredients:{type:[], required:true},
    instructions:{type:[], required:true},
    category:{type:String, required:true}
})

export default mongoose.model<Irecipe>("Recipe", recipeSchema)
import {Schema, model} from 'mongoose';


export interface RecipeType {
  title:string, 
  description:string,
  imgUrl:string,
  timeInMins:number,
  ratings:number[],
  ingredients:[{name:string,amount:number,unit:string}],
  instructions:string[],
  category:string
}

const schema = new Schema<RecipeType> ({
    title:{type:String, required:true},
    description:{type:String,required:true},
    imgUrl:{type:String, required:true},
    timeInMins:{type:Number, required:true},
    ratings:{type:[Number], required:true},
    ingredients:{type: [Object], required:true},
    instructions:{type:[String], required:true},
    category:{type:String, required:true}
})

const RecipeModel = model<RecipeType>('rec', schema, 'recipes')

export default RecipeModel;
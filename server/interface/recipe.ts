import { Document } from "mongoose"

export default interface Irecipe extends Document {
  title:string, 
  description:string,
  imgUrl:string,
  timeInMins:number,
  ratings:number[],
  ingredients:[{name:string,amount:number,unit:string}]
}

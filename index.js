function combineUsers (...args){

 let combinedObject={
  users: []
 }

 for(let arry of args){
  combinedObject.users = [...combinedObject.users,...arry]
  }

  combinedObject.merge_date = new Date().toString("M/d/yyyy")

  return combinedObject;

}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
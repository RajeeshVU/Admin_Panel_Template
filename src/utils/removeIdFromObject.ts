export function removeFieldObject(obj:any, field:string) {
  const newObj = { ...obj };
  delete newObj[field];
  return newObj;
}
import { ClassBase } from 'nest-shared'

console.log(ClassBase.name) // ClassBase

class ClassBaseImpl implements ClassBase { }

const classBaseImpl = new ClassBaseImpl()

console.log('typeof ClassBase', typeof ClassBase) // function
console.log('typeof ClassBaseImpl', typeof ClassBaseImpl) // function
console.log('typeof classBaseImpl', typeof classBaseImpl) // object

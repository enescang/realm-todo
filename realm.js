import Realm from 'realm';

const TODO_SCHEMA = 'Todo'

const TodoSchema = {
    name: TODO_SCHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'string',
        todo: 'string'
    }
}
const realm = new Realm({ schema: [TodoSchema], schemaVersion: 2 });

const addTodo = (todo) => {
    try {
        todo._id = Math.floor(Math.random() * 100000).toString();
        realm.write(() => {
            realm.create(TODO_SCHEMA, todo)
        });
    } catch (e) {
        console.log(e);
    }
 
    console.log(getAllTodos());
}

const searchTodo = (str) => {
    const todo = realm.objects(TODO_SCHEMA).filtered(`todo LIKE "*${str}*"`);
    return todo;
}

const deleteTodo = (_id, content) =>{
    try {
        realm.write(()=>{
            const todo = realm.objectForPrimaryKey(_id);
            todo.content = content;
        })
    } catch (e) {
        console.log('>>> Delete Error: ', e, ' <<<');
    }
}

const clearAll = () => {
    realm.write(()=>{
        realm.deleteAll();
    })
}

const getAllTodos = () => {
    const todos = realm.objects(TODO_SCHEMA);
    return todos;
}


export {
    TODO_SCHEMA,
    addTodo,
    searchTodo,
    deleteTodo,
    clearAll,
    getAllTodos,
}
export default realm;
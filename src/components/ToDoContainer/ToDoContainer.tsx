import './ToDoContainer.scss';
import ToDo from '../ToDo/ToDoItem'
import {ToDoData} from '../../data/ToDo'

export const ToDoContainer  = () => {
    return ( 
        <div className="center">
        <div className='container'>
            {ToDoData.map(todo =>
                <ToDo key={todo.id} 
                content={todo.text} 
                check={false}/>
            )}
        </div>
        </div>
     )
}
export default ToDoContainer;
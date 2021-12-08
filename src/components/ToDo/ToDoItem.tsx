import './ToDoItem.scss';

type TodoTypes={
    content:string
    check:boolean
}
export const ToDo  = (props:TodoTypes) => {
    return ( 
        <div className='item'>
            <div className='checkbox' style={{backgroundColor:props.check?'green':'red'}}>
                
            </div>
            <div className="contentContainer">
                <h3 className="content">
                    {props.content}
                </h3>
            </div>
            
          
        </div>
     )
}
export default ToDo;
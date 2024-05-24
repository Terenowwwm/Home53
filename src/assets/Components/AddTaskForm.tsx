import React from 'react';
interface Props extends React.PropsWithChildren{
    addText: () => void;
    onAdd: React.ChangeEventHandler<HTMLInputElement>
}

const AddTaskForm:React.FC<Props> = (props) => {
    return (
        <div>
            <form action="#" onSubmit={props.addText} >
                <input className='loko' type="text"  onChange={props.onAdd}/>
                <button type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;
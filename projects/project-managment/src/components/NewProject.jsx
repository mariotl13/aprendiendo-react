
import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"
import { useContext } from "react";
import { ProjectsContext } from "../store/ProjectsContext";

export default function NewProject() {

    const { dispatchProjects } = useContext(ProjectsContext);

    const modalRef = useRef();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const handleOnSave = () => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;
        if (title && description && dueDate) {
            dispatchProjects({ type: 'ADD_NEW', payload: { title, description, dueDate } })
        } else {
            modalRef.current.open();
        }
    }

    return <div className="w-[35rem] mt-16">

        <Modal ref={modalRef}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter a value</p>
        </Modal>

        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={() => dispatchProjects({ type: 'CANCEL_NEW' })} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleOnSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input ref={titleRef} type="text" label='Title'></Input>
            <Input ref={descriptionRef} label='Description' isTextArea></Input>
            <Input ref={dueDateRef} type="date" label='Due Date'></Input>
        </div>
    </div>
}
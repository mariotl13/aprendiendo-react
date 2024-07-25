import { useContext } from "react";
import { ProjectsContext } from "../store/ProjectsContext";


export default function SelectedProject({ project }) {

    const { dispatchProjects } = useContext(ProjectsContext);

    const formattedDate = new Date(project.dueDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button onClick={() => dispatchProjects({ type: 'REMOVE_PROJECT', payload: project.id })} className="text-stone-600 hover:text-stone-950">Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
    </div>
}
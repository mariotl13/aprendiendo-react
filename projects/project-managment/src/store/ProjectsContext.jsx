import { useReducer } from "react";
import { createContext } from "react";


export const ProjectsContext = createContext({
    projectsState: {},
    dispatchProjects: ({ type, payload }) => null
})

function projectsReducer(state, action) {
    switch (action.type) {
        case 'SHOW_NEW':
            return {
                ...state,
                selectedProjectId: null
            }

        case 'CANCEL_NEW':
            return {
                ...state,
                selectedProjectId: undefined
            }

        case 'ADD_NEW':
            return {
                selectedProjectId: undefined,
                projects: [
                    ...state.projects,
                    { ...action.payload, id: Math.random() }
                ]
            }

        case 'SELECT_PROJECT':
            return {
                ...state,
                selectedProjectId: action.payload,
            }

        case 'REMOVE_PROJECT':
            return {
                selectedProjectId: undefined,
                projects: state.projects.filter(project => project.id !== action.payload)
            }

        default:
            return state;
    }
}

export default function ProjectsProvider({ children }) {

    const [projectsState, dispatchProjects] = useReducer(projectsReducer, {
        selectedProjectId: undefined,
        projects: []
    })

    return <ProjectsContext.Provider value={{ projectsState, dispatchProjects }}>
        {children}
    </ProjectsContext.Provider>
}
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx'
import { useState } from 'react';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const showNewProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  const cancelNewProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  const addNewProject = (title, description, dueDate) => {
    setProjectsState(prevState => {
      return {
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          { title, description, dueDate, id: Math.random() }
        ]
      }
    })
  }

  const selectProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  const removeProject = (id) => {
    setProjectsState(prevState => {
      return {
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== id)
      }
    })
  }

  let selectedProject;
  if (projectsState.selectedProjectId) {
    selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  }

  return (
    <>
      <div id="modal-root"></div>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectsSidebar onAddProject={showNewProject} projects={projectsState.projects} onSelectProject={selectProject}></ProjectsSidebar>
        {projectsState.selectedProjectId === undefined && <NoProjectSelected onAddProject={showNewProject} />}
        {projectsState.selectedProjectId === null && <NewProject onNewProject={addNewProject} onCancelProject={cancelNewProject}></NewProject>}
        {projectsState.selectedProjectId && <SelectedProject project={selectedProject} onRemove={removeProject}></SelectedProject>}
      </main>
    </>
  );
}

export default App;

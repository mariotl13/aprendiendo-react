import { useContext } from "react";
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx'
import SelectedProject from './components/SelectedProject.jsx';
import { ProjectsContext } from './store/ProjectsContext.jsx';

function App() {

  const { projectsState } = useContext(ProjectsContext);

  let selectedProject;
  if (projectsState.selectedProjectId) {
    selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  }

  return (
    <>
      <div id="modal-root"></div>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectsSidebar />
        {projectsState.selectedProjectId === undefined && <NoProjectSelected />}
        {projectsState.selectedProjectId === null && <NewProject />}
        {projectsState.selectedProjectId && <SelectedProject project={selectedProject}></SelectedProject>}
      </main>
    </>
  );
}

export default App;

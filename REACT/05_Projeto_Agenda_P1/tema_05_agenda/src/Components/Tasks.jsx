import TasksItem from './TasksItem';

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <TasksItem key={task.id} task={task} />
            ))}
        </>
    );
};
export default Tasks;

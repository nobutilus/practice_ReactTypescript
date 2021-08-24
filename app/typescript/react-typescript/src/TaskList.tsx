import React from 'react'
import TaskItem from './TaskItem'
import { Task } from './Types'

// タスクをチェックするhandleDone,削除するhandleDelete関数を作成して、TaskItem.tsxに渡す


type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, done: !task.done }
                : t
        ))
    }

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter(t =>
            t.id !== task.id
        ))
    }

    return (
        <div className="inner">
            {
                tasks.length <= 0 ? '登録されたTODOはありません。' :
                    <ul className="task-list">
                        {tasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                handleDelete={handleDelete}
                                handleDone={handleDone}
                            />
                        ))}
                    </ul>
            }
        </div>
    )
}

export default TaskList

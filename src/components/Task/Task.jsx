import { motion } from 'framer-motion';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import './Task.css';
const Task = ({ isDone, topic, content, id, type }) => {
  const { deleteTask, doneTask, setId } = useContext(TaskContext);

  return (
    <motion.div
      className='task'
      initial={{ x: '-100%', margin: 0}}
      animate={{ x: 0, marginTop: 25 }}
      exit={{
        x: '-100%',
        height: 0,
        marginTop: 0,
        padding: 0,
        opacity: 0,
        width: 0,
        transition: {
          duration: 0.3,
        },
      }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 10,
      }}
    >
      <span className={`task-line done-${isDone}`}></span>
      <div className='task__status'>
        <motion.button
          className="btn btn-warning btn-sm"
          whileTap={{ scale: 2 }}
          onClick={() => deleteTask(id)}
        >Delete</motion.button>
        <motion.button
          whileTap={{ scale: 2 }}
          onClick={() => setId(id)}
          className="btn btn-warning btn-sm"
        >Edit</motion.button>
        <motion.button 
          className='ball task__close'
          whileTap={{ scale: 2 }}
          onClick={() => doneTask(id)}    
        ></motion.button>
      </div>
      <h4 className='task__title'>
        {isDone === true ? <del>{topic}</del> : topic}
      </h4>
      <p className='task__content'>
        {isDone === true ? <del>{content}</del> : content}
      </p>
      <p className='task__content'>
        {isDone === true ? <del>{type}</del> : type}
      </p>
    </motion.div>
  );
};
export default Task;

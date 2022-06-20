import { motion } from "framer-motion";
import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "./AddTask.css";
const AddTask = () => {
  const { addTasks } = useContext(TaskContext);
  const [text, setText] = useState({ topic: "", content: "",type:""});
  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };
  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });

  };
  const [startDate, setStartDate] = useState(new Date());
  const type = {
    options: [
      {
        name: 'A',
        value: 'a',
      },
      {
        name: 'B',
        value: 'b',
      },
    ],
    value: '?',
  };
  const handleType = (e) => {
    this.setState({...text, type:e.target.value})

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setText({ topic: "", content: "",type:"" });
    
    if (text.topic.trim() !== "" && text.content.trim() !== "") {
      addTasks(text.topic, text.content, text.type);
    } else {
      errorMessage();
    }
  };
  const errorMessage = () => {
    toast.error("Please fill the fallowing form");
  };
  return (
    <div className="add-task">
      <ToastContainer />
      <div className="add-task__title">
        <img
          className="add-task__title__icon"
          src="./svg/add-task.svg"
          alt=""
        />
        <h2 className="add-task__title__text">New Task</h2>
      </div>
      <form onSubmit={handleSubmit} className="add-task__inputs">
        <div>
          <p className="add-task__lether-count">{text.topic.length}/50</p>
          <input
            maxLength={50}
            value={text.topic}
            onChange={handleTopic}
            className="input add-task__inputs__name"
            type="text"
            placeholder="Add new task"
          />
        </div>
        <div>
          <p className="add-task__lether-count">{text.content.length}/150</p>
          <textarea
            maxLength={150}
            value={text.content}
            onChange={handleContent}
            className="input add-task__inputs__content"
            type="text"
            placeholder="more info about task"
          />
        </div>
        <div>
        <DatePicker 
          className="date"
          selected={startDate}
          minDate={new Date()}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
        />
        </div>
        <div className="piority">
          <select className="type-task" >
            <option value={0}>Normal</option>
            <option value={1}>Low</option>
            <option value={2}>High</option>
          </select>
        </div>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.9 }}
          className="add-task__inputs__submit"
        >
          Create New Task
        </motion.button>
      </form>
    </div>
  );
};

export default AddTask;

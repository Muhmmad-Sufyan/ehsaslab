import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {
  // const [date, setDate] = useState(new Date().toDateString());
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // const [newTask, setNewTask] = useState('');
  // const [tasks, setTasks] = useState([
  //   { id: 1, text: 'Take out the trash', time: '9:00 AM', completed: false },
  //   { id: 2, text: 'Do homework', time: '12:00 PM', completed: false },
  //   { id: 3, text: 'Go to the grocery store', time: '1:00 PM', completed: false },
  //   { id: 4, text: 'Run 5 kilometers', time: '4:20 PM', completed: false },
  //   { id: 5, text: 'Load the dishwasher', time: '9:00 PM', completed: false },
  //   { id: 6, text: 'Take out the trash', time: '9:00 AM', completed: false },
  // ]);

  // useEffect(() => {
  //   const apiUrl = 'https://api.github.com/repos/Muhmmad-Sufyan/Json';
  //   axios.get(apiUrl)
  //     .then(response => {
  //       console.log(response.data);
  //       // Process the GitHub repository data here
  //     })
  //     .catch(error => {
  //       console.error('Axios error:', error);
  //     });

  // }, [])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 500);

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, []);

  // const handleChecked = (id) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
  //   );
  // };

  // const handleRemove = (id) => {
  //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  // };

  // const handleEdit = (id) => {
  //   // Implement the edit functionality
  //   // You can use a modal or an inline form for editing
  //   console.log('Edit task with id:', id);
  // };

  // const handleAddTask = () => {
  //   if (newTask.trim() !== '') {
  //     const newTaskObj = {
  //       id: tasks.length + 1,
  //       text: newTask,
  //       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  //       completed: false,
  //     };

  //     setTasks((prevTasks) => [...prevTasks, newTaskObj]);
  //     setNewTask('');
  //   }
  // };




  const showModal = () => {
    const modal = document.getElementById('modalExample');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  const hideModal = () => {
    const modal = document.getElementById('modalExample');
    if (modal) {
      modal.classList.add('hidden');
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-800 via-green-400 to-blue-500">
    //   <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/2 bg-white rounded-lg p-4">
    //     <img className="w-[20%] h-[20%] mx-auto" src="/src/assets/images/Ehsas Lab (2).png" alt="Ehsas Lab" />
    //     <div className="mt-3 my-5 text-sm text-[#8ea6c8] flex flex-col md:flex-row justify-between items-center">
    //       <p className="set_date mb-2 md:mb-0">{date}</p>
    //       <p className="set_time">{time}</p>
    //     </div>
    //     <div className="w-full mt-4 flex text-sm flex-col text-center justify-center">
    //       <div className="flex justify-between items-center">
    //         <input
    //           type="text"
    //           placeholder="Add a new task"
    //           className="w-3/4 md:w-2/3 h-10 border border-gray-300 p-2 rounded"
    //           value={newTask}
    //           onChange={(e) => setNewTask(e.target.value)}
    //         />
    //         <button
    //           className="bg-blue-500 text-white rounded px-4 py-3 ml-2"
    //           onClick={handleAddTask}
    //         >
    //           Add Task
    //         </button>
    //       </div>
    //     </div>
    //     <ul className="my-4">
    //       {tasks.map((task) => (
    //         <li key={task.id} className="mt-4">
    //           <div className="flex flex-col md:flex-row gap-2 items-center">
    //             <div className={`w-full md:w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3 ${task.completed ? 'completed' : ''}`}>
    //               <span
    //                 className={`w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center`}
    //                 onClick={() => handleChecked(task.id)}
    //               >
    //                 {task.completed && <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXdJREFUSEu9lY1RwkAQhTcVaAdiBWoFagdagXYgVMBRgViBWIFQgZYAHYQOtIL4XjZnLsfGy8/gzSzDJHvv27+7ZHLklR1ZX9IAJ48I4hp2WRlj2paWyVrmsvkryHaAkztsfIZNElnmeD8TB5ixbICTJXyfepZvCcgs3nMIGCbudV8AmYaQJkDL8t4z8tj9PixXDGA9z0YCcgDOvUYN0Gl57SxeyDemiL2aG3t+swgBKzg+dAKo+A0i3cKcAXnDUwYcnAM6i1wkAU1xno0P2Gm0j+CrGFAY4gspMBWZnJTvuomrjNPgwxLFgEWZvsMJLuSz3FSXpS3yOkYDEJfoC963VZ0pyKiYelpcZFf5NTJYQSJucg1RQBdxeppNbjtkCtFlNdRonRhjqhHm+LUOGiFc8bRY4nvoTPyLf74qNIshN6kPOHHZebdhkANxyqU+OMwmdfnt4TPt98EJW6dXOI0j6q+SHf7z3KzbhO0mWzMx8ln6oz8S8AO4TGgZRJZr+AAAAABJRU5ErkJggg==" />}
    //               </span>
    //               <p className={`text-sm ml-4 ${task.completed ? 'text-[#5b7a9d] line-through' : 'text-[#5b7a9d] font-semibold'}`}>{task.text}</p>
    //             </div>
    //             <span className="w-full md:w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center mt-2 md:mt-0">{task.time}</span>
    //             <div className="flex gap-2 mt-2 md:mt-0">
    //               <button className="bg-red-500 text-white rounded px-4 py-3" onClick={() => handleRemove(task.id)}>
    //                 Remove
    //               </button>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    // <div className='mx-w-screen-lg shadow-sm '>
    //   <div className='flex   justify-between  pb-[0.6%]  mx-[10%]'>
    //     <div className='pt-[0.7%] align-middle'>
    //       <img src="/src/assets/images/doner.png" alt="" />
    //     </div>
    //     <div className='py-7'>
    //       <span onClick={showModal} className='md:hidden'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFFJREFUSEtjZKAxYKSx+QyjFhAMYfoHEQsDw3+CzsKj4A8Darxi+IDmFlDiemx66R8HNPcBzeOA5hbQPIiGvgU0jwOaWzD042DUB+ghQPPSFAD6bgwZUDG8cwAAAABJRU5ErkJggg==" /></span>
    //     </div>
    //     <ul className='md:flex gap-x-10 hidden border-box  text-[#6F8BA4] font-bold my-auto text-[16px] py-[2%] px-[4%]'>
    //       <li className='hover:text-[#e12454]'>Home</li>
    //       <li className='hover:text-[#e12454]'>About</li>
    //       <li className='hover:text-[#e12454]'>Contact</li>
    //       <li className='hover:text-[#e12454]'>Login</li>
    //     </ul>

    //     <div id="modalExample" className=" md:hidden  fixed  inset-0 md:bg-white bg-black md:bg-opacity-0 bg-opacity-10 items-center justify-center">

    //       <div className='bg-white w-[70%] h-full'>
    //         <div className='  '>
    //           <div className='flex gap-x-3 justify-between pt-10'>
    //             <img src="/src/assets/images/doner.png" alt="" className='h-[60%] w-[60%]' />
    //             <button
    //               data-modal-hide="modalExample"
    //               onClick={hideModal} className='text-red-500    font-bold   text-xl mr-7  '>
    //               X
    //             </button>
    //           </div>

    //           <ul className='flex-col  text-xl border-box  text-[#6F8BA4] font-bold my-auto text-[16px] py-[2%] px-[4%]'>
    //             <li className='hover:text-[#e12454] flex gap-x-4 pb-3'>
    //               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPNJREFUSEvtlOsNwjAMhNsNYAJGADaADRgFJoCR2ABGgA1gAtgAzpJdBZOkl0iR+EGlyHn1PteP9l3jp2+s35UAJnDmpA6tYZ+McyzAxBcqeoGlIAwgFL8qYA5LQcYAXnylgDMsBckBYuIWdzmjIClATtxyS0FiAEachnhAiTgF8QCpDEmeVIsklKp13PPhWhrdA156MC0QD7/koYtBNwUYK99UE5uDRYAN1PYY1sUmfsNkh3EMaFUAEZolXJacDfHGvArw9ZLCYvt/wEcmfjNEuYpJ1b7fl7/AUNK+oaTmD/q7YAXDe3cstmFv1HYsDW8OeAPN0lIZ2Cv9pAAAAABJRU5ErkJggg==" />
    //               Home
    //             </li>
    //             <li className='hover:text-[#e12454] flex gap-x-4 pb-3'>
    //               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWZJREFUSEu9lY1Nw0AMhdtJCBMAE8AIMAHdAJgEmACYANgAJgA2aCeB9yH75FxzPxEKlqw0V5/f8zufs14tbOuF8696ADYicSo/NofTp/mLnq81kjWAc228lQ+NKrf6/0YO2J6VAO4UeWXROz15fzPWLFPNmfxafmBxxAA0simAmJwNvNcMECrF7g00xecAyPJs/54Exg2M34o+LOhCzyRXDrC1kkvMvy3JVOVeCTkOnVEM3GjxQY7mQ4FyDYAtTjBVEQEeFXAp79G9JJlX8aQACI/uAb19JJ+jfQ7kZ0Eu8owAWuUTPzsmSjR7c885RYAeiVokXKIvgfN7JFHPIbcAqofsl4xWS32cydACqLZp7OO/XLTRPfr3UUEVcdihKQOsZrOGnSeKIOjK+7ucTsPoED5CJB9sbW+S5l2Us+TQSezzvlQFmgOUJmgM7PlkAoTDmlGC0edUQ9LJxA7SA1Bi3rW+OMAP+HBWGavSgtoAAAAASUVORK5CYII=" />
    //               About
    //             </li>
    //             <li className='hover:text-[#e12454] flex gap-x-4 pb-3'>
    //               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARNJREFUSEvFleERATEQhe8qQAVOBZRABZRABajA6YAKnBJ0cDrQgesAFfDW5EwmNncbSUZm8iOZ3fdtXrKTNIk80sj6CQeYAbrBHHnAS+ROKJ8DVNjve4jXqW9tDvAMIP7RdgWskVmoAlbKSls9zicg8Z2hljdAvgBt1vQgdjcAGdZXyxGCALoQv0kBdZztJFsEkCX6mGNxCAUgHQIclVVTdSd0Cm44W2R7Lbb9nwAPqF2UInV6p4Hq9ExPyo7SEBxjTf1AdplDDFggs2jxh7tskUV7VaHEf2rCpRYoAgyQUEnUEZNh6k0nssj1v9B7SAQQFs+G/Q9Ankf9cOjLzDGHHv6ckUs9wv5oHrqWbguqaIi9ACCuLxm+jdhOAAAAAElFTkSuQmCC" />
    //               Contact
    //             </li>
    //             <li className='hover:text-[#e12454] flex gap-x-4 pb-3'>
    //               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWFJREFUSEvVlYtNAzEQRJMKSAnpAFIBlwqACrh0ABWEEuiA0AF0cFQAqSApIVQA805ryTi294h0Eqy0suLPzM7Yt5lORo7pyPiTP0PQSOmlkvHCVH9o7JRvNmbN8BTMdOpJee1Y+aL1lfKQ7qsRAL5Xnik/lY9KgKicQAnEd7aHvTfRer/JU9BqT2MgR9UZEYVAfmsKljGJR5Aqrv3eGEmnEZJBClJAQFCVi9hSCCByLUqBvkw+ADnLHjS/Vj6HQn5rEQQE4D+8tnku/t2KWKQKwuGCA9lpnia2xRFw+uJjBaMTDKk8FMF30ZgV8blg0VaT/Rd/yh1wGPBRLhm/24JUnulOyXjyM63ZSBu5UtL8UNiHZxEV4/t9wRIw4oZ4dDc1grkO09hodvhNv3m1OYC5RCqm2UGSvXhPASAA819QC2xplft0k0cQ9jcGAOG5TfKaULhRdiX2oQSOgPLy/yf4BhTBSxlFk4mjAAAAAElFTkSuQmCC" />
    //               Login
    //             </li>
    //           </ul>
    //         </div>

    //       </div>




    //     </div>

    //   </div>

    // </div>

    <div className='flex px-[15%] py-10 justify-between bg-gradient-to-b from-blue-800 to-blue-500'>
      <div>
        <h1 className='text-white italic scale-x-10000 scale-x-500 from-transparent decoration-transparent text-4xl font-bold font-sans '>
          Muhammad Sufyan
        </h1>
      </div>

      <div>
        <input type="text" className='w-[500px] h-10 my-3  pl-4' />
        <label htmlFor="" className='text-white bg-blue-500 p-10'> Search </label>
      </div>


    </div>


  );
};

export default App;

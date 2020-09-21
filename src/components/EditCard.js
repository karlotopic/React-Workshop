import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/App.css";

function EditCard(props) {
  let [data, setData] = useState(props.location.data);
  let local = JSON.parse(localStorage.getItem("data"));
  let [deletebutton, setButton] = useState();

  useEffect(() => {
    if (props.location.data == "Create") {
      setData({
        id: local.length + 1,
        title: "",
        price: "",
        date: "",
        author: "",
        category: "",
      });
    } else {
      setButton(
        <Link to="/">
          <button className="myButton Create" onClick={() => Delete()}>
          <i class="fas fa-trash"></i> Delete
          </button>
        </Link>
      );
    }
  }, []);

  const ChangeHandler = (e) => {
    data[e.target.name] = e.target.value;
    setData(data);
  };

  const Submit = () => {
    local[data.id - 1] = data;
    if(data.category.length==0){
      local[data.id-1].category="Design"
    }
    localStorage.setItem("data", JSON.stringify(local));
    alert("uspjesno ažurirana kartica sa naslovom: " + data.title);
  };

  const Delete = (props, e) => {
    local.splice(data.id - 1, 1);
    local.map((post, index) => {
      return (post.id = index + 1);
    });
    localStorage.setItem("data", JSON.stringify(local));
    alert("uspjesno izbrisana kartica sa naslovom: " + data.title);
  };

  return (
    <div>
      <form className="editform">
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={(e) => ChangeHandler(e)}
            defaultValue={data.title}
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            name="price"
            onChange={(e) => ChangeHandler(e)}
            defaultValue={data.price}
          />
        </label>

        <label>
          Date and Time:
          <input
            type="text"
            name="date"
            onChange={(e) => ChangeHandler(e)}
            defaultValue={data.date}
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            name="author"
            onChange={(e) => ChangeHandler(e)}
            defaultValue={data.author}
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            defaultValue={data.category}
            onChange={(e) => ChangeHandler(e)}
          >
            <option value="Design">Design</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Marketing">Marketing</option>
          </select>
        </label>
          <div className="buttons">
          <Link to="/">
            <button className="myButton" onClick={() => Submit()}>
             <i class="far fa-save"></i> Submit
            </button>
          </Link>
          {deletebutton}
          </div>
        </form>
        
      
    </div>
    
  );
}

export default EditCard;

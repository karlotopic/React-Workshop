import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../assets/App.css";

function Main(props) {
  const [data, setData] = useState({
    posts: JSON.parse(localStorage.getItem("data")),
    visible: 10,
  });
  const [search, setSearch] = useState("");

  const LoadMore = () => {
    let newObj = {
      posts: data.posts,
      visible: data.visible + 10,
    };
    setData(newObj);
  };

  return (
    <div className="wrapper">
      <div className="sidebar">
        <p>Filter by category:</p>
        <div>
          <div className="filter-buttons" onClick={() => setSearch("ALL")}>
            <p>ALL</p>
          </div>
          <div className="filter-buttons" onClick={() => setSearch("Design")}>
            <p>
              <i className={"fas fa-palette icons "}></i>Design
            </p>
          </div>
          <div className="filter-buttons" onClick={() => setSearch("Backend")}>
            <p>
              <i className={"fas fa-table icons "}></i>Backend
            </p>
          </div>
          <div className="filter-buttons" onClick={() => setSearch("Frontend")}>
            <p>
              <i className={"fas fa-code icons "}></i>Frontend
            </p>
          </div>
          <div className="filter-buttons"onClick={() => setSearch("Marketing")}>
            <p>
              <i className={"fas fa-bolt icons "}></i>Marketing
            </p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="cards">
          {data.posts
            .slice(0, data.visible)
            .filter((post) => {
              if (search == "" || search == "ALL") {
                return post;
              } else {
                return post.category == search;
              }
            })
            .map((post, index) => {
              return (
                <Link
                  to={{
                    pathname: "/edit",
                    data: post,
                  }}
                >
                  <Card data={post} />
                </Link>
              );
            })}
        </div>
        <div className="buttons">
          <button className="myButton" onClick={() => LoadMore()}>
            <i class="fas fa-spinner"></i> Load More
          </button>
          <Link
            className="myButton Create"
            to={{
              pathname: "/edit",
              data: "Create",
            }}
          >
            <i class="far fa-plus-square"></i> Create new workshop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;

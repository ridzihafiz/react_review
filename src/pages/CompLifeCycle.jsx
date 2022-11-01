import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// CLASS COMPONENT
// export default class CompLifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "RidHafiz",
//     };
//   }

//   handleChange = () => {
//     this.setState({
//       username: "Utari",
//     });
//   };

//   // comp did mount
//   componentDidMount() {
//     console.log("component sudah di mounting");
//   }

//   componentDidUpdate() {
//     console.log("ada component yang telah di update");
//   }

//   componentWillUnmount() {
//     console.log("good bye");
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Component LifeCycle</h1>
//         <h2> {this.state.username} </h2>
//         <button onClick={this.handleChange}>Change</button>
//       </div>
//     );
//   }
// }

// FUNCTIONAL COMPONENT
export default function CompLifeCycle() {
  // state
  const [show, setShow] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(2);

  const handleShow = () => {
    setShow(!show);
  };

  const getPost = async () => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await result.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  // next page
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  };

  // CLC
  // comp did mount
  useEffect(() => {
    console.log("component terlihat di web");
    getPost()
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  // comp update
  // useEffect(() => {
  //   console.log("state show di update");
  // }, [show]);

  return (
    <div className="App">
      <h1>CompLifeCycle</h1>
      {show ? <h3>RidHafiz</h3> : null}
      <button onClick={handleShow}>show / hide</button>

      {post.map((e) => (
        <div key={e.id}>
          <h3>
            {e.id}. {e.title}{" "}
          </h3>
          <p> {e.body} </p>
          <Link to={`/route/${e.id}`}>Lihat</Link>
        </div>
      ))}

      <div>
        <button onClick={prevPage}>Prev</button> {page}{" "}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

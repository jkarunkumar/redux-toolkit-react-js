import React, { useEffect } from "react";
import "../App.css";
import { getAllData } from "../Redux/datalist";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  const { allData } = useSelector((state) => state.dataAll);
  console.log(allData, "checkData");
  return (
    <div className="App">
      <div className="containerTable">
        <table>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Body</th>
            <th>Edit</th>
          </tr>
          {allData &&
            allData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.body}</td>
                  <td>
                    {" "}
                    <Link className="linkData" to={`/dataView/${val.id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Home;

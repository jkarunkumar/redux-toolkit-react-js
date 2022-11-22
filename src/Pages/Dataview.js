import React, { useEffect } from "react";
import "../App.css";
import { getSelectData } from "../Redux/datalist";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Dataview(props) {
  let { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(getSelectData(id));
    }
    fetchData();
  }, [id]);

  const { selectData } = useSelector((state) => state.dataAll);
  console.log(selectData, "selectData");
  return (
    <div className="App">
      <div className="containerTable">
        <table>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          <tr>
            <td>{selectData.id}</td>
            <td>{selectData.title}</td>
            <td>{selectData.body}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Dataview;

import React from "react";
import "./Style.css";
import Navbar from "./Navbar";

function Student() {
  return (
    <>
      <Navbar />
      <div className="student-details">
        <label className="student-details-heading">Students Details</label>
        <button className="btn-add-student-details">Add new student</button>
      </div>
      <div className="studentdata">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          <tr>
            <td>Ashish</td>
            <td>25</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>John</td>
            <td>26</td>
            <td>MERN</td>
            <td>September</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Doe</td>
            <td>25</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Biden</td>
            <td>24</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Brijesh</td>
            <td>25</td>
            <td>MERN</td>
            <td>September</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Christ</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Elent</td>
            <td>26</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
        </table>
      </div>
      <div className="extra"></div>
    </>
  );
}

export default Student;

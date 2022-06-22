import React from "react";

function Dropdown({ onChange }) {
  return (
    <React.Fragment>
      <select name="weeks" id="week" onChange={onChange}>
        <option value="Week1">Week 1</option>
        <option value="Week2">Week 2</option>
        <option value="Week3">Week 3</option>
        <option value="Week4">Week 4</option>
        <option value="Week5">Week 5</option>
        <option value="Week6">Week 6</option>
        <option value="Week7">Week 7</option>
        <option value="Week8">Week 8</option>
        <option value="Week9">Week 9</option>
        <option value="Week10">Week 10</option>
        <option value="Week11">Week 11</option>
        <option value="Week12">Week 12</option>
        <option value="Week13">Week 13</option>
        <option value="Week14">Week 14</option>
        <option value="Week15">Week 15</option>
        <option value="Week16">Week 16</option>
      </select>
    </React.Fragment>
  );
}

export default Dropdown;

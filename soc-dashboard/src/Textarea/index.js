import React from "react";

export default function Textarea({ rows, onChange, notesText }) {
  console.log("Passed into text area component: ", {
    rows,
    onChange,
    notesText,
  });
  return (
    <div>
      <textarea onChange={onChange} rows={rows} value={notesText}></textarea>
    </div>
  );
}

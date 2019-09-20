import React, { useState } from "react";
import { connect } from "react-redux";
import {
  deleteColor,
  saveEdit,
  createColors,
  getColors
} from "../actions/actions";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = props => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {props.colors.map(color => {
          return (
            <li key={color.color}>
              <span
                className="delete"
                onClick={async () => {
                  props.deleteColor(color.id);
                  setTimeout(function() {
                    props.getColors();
                  }, 50);
                }}
              >
                x
              </span>
              <span onClick={() => editColor(color)}>
                <span>{"    " + color.color}</span>
              </span>
              <div
                onClick={() => editColor(color)}
                className="color-box"
                style={{ backgroundColor: color.code.hex }}
              />
            </li>
          );
        })}
      </ul>
      {console.log("Colortoedit", colorToEdit)}
      {editing && (
        <form onSubmit={() => props.saveEdit(colorToEdit.id, colorToEdit)}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          return props.createColors({
            id: Date.now(),
            color: document.getElementById("id").value,
            code: { hex: document.getElementById("hex").value }
          });
        }}
      >
        <legend>Add color</legend>
        <label>
          color name:
          <input id="id" type="text" />
        </label>
        <label>
          hex code:
          <input id="hex" type="text" />
        </label>
        <div className="button-row">
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    colors: state.colors
  };
};

export default connect(
  mapStateToProps,
  { saveEdit, deleteColor, createColors, getColors }
)(ColorList);

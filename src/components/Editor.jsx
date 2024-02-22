import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';

import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

import { Controlled as ControlledEditorComponent } from 'react-codemirror2';



const Editor = ({ language, value, setEditorState }) => {

  const [theme, setTheme] = useState("dracula")
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  }

  const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night']

  return (
    <div className="editor-container form-control my-3 mb-3">
      <div className="mb-2"style={{marginBottom: "10px"}}>
        <label htmlFor="cars">Choose a theme:</label>
        <select className="mx-2"name="theme" onChange={(el) => {
          setTheme(el.target.value)
        }}>
          {
            themeArray.map((theme,index) => (
              <option key={index} value={theme}>{theme}</option>
            ))
          }
        </select>
      </div>
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value= {value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true, 
        }}
      />
    </div>
  )
}

export default Editor

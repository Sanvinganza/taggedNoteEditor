import React from 'react';
import Note, { INoteProps } from './components/Note';
import './index.scss';

const notes = [{
  tags: ['tag1', 'tag2', 'tag3'],
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, vitae eius eum laboriosam laborum inventore.'
},
{
  tags: ['tag1', 'tag2', 'tag3'],
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, vitae eius eum laboriosam laborum inventore.'
},
{
  tags: ['tag1', 'tag2', 'tag3'],
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, vitae eius eum laboriosam laborum inventore.'
},
{
  tags: ['tag1', 'tag2', 'tag3'],
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, vitae eius eum laboriosam laborum inventore.'
}];

function App() {
  return (
    <div className="container">
      <div className="container--inner">
        <div className="logo">Tagged Note Editor</div>
        <div className="notes-container">
          {notes.map((note: INoteProps) => {
            return(
              <Note tags={note.tags} text={note.text} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

import Note, { INoteProps } from './components/Note';
import './index.scss';
import data from './data.json';

function App() {
  const { notes } = data;

  return (
    <div className="container">
      <div className="container--inner">
        <div className="logo">Tagged Note Editor</div>
        <div className="container--inner__body">
          {notes.map((note: INoteProps) => 
              <Note 
                tags={note.tags} 
                record={note.record} 
              />)
            }
        </div>
      </div>
    </div>
  );
}

export default App;

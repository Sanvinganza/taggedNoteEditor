import { useState } from 'react';
import ReactModal from 'react-modal';
import { AddNote } from './AddNote';
import Tag from './Tag';

export interface INoteProps {
    tags: string[],
    record: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Note (props: INoteProps) {
  const { tags, record } = props;
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  
  function openEditModal() {
    setEditModalIsOpen(true);
  }

  function afterEditOpenModal() {

  }

  function closeEditModal() {
    setEditModalIsOpen(false);
  }

  return (
    <div className='note'>
      <div className="note__header">
        <div onClick={openEditModal} className="button">
          <div className="button__body">Edit</div>
        </div>
        <ReactModal
          isOpen={editModalIsOpen}
          onAfterOpen={afterEditOpenModal}
          onRequestClose={closeEditModal}
          style={customStyles}
        >
          <textarea
            cols={20}
            rows={10}
            autoFocus
          >{record}</textarea>
        </ReactModal>
      </div>

      <div className="note__body">
        <div className="note__record">
          {record}
        </div>  
      </div>

      <div className="note__footer">
        <div className="tag__list">
          {tags.map((tag: string) => <Tag tag={tag}/>)}
        </div>
      </div>
    </div>
  );
}

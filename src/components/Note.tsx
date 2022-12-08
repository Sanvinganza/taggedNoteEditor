import { useState } from 'react';
import Tag from './Tag';

export interface INoteProps {
    tags: string[],
    text: string
}

export default function Note (props: INoteProps) {
  const { tags, text } = props;
  const [isOpen, seIsOpen] = useState<boolean>(false);

  return (
    <div className='note'>
      <div className="note--inner">
        <div onClick={() => alert(isOpen)} className="edit">Edit</div>
        <div className="text">{text}</div>
        <div className="tags-container">
            {tags.map((tag: string) => {
                return <Tag tag={tag}/>
            })}
        </div>
      </div>
    </div>
  );
}

export interface ITagProps {
    tag: string;
}

export default function Tag (props: ITagProps) {
  const { tag } = props;
  
  return (
    <div className='tag'>#{tag}</div>
  );
}

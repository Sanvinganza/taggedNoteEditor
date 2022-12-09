import Note from "./Note";

export interface IAddNoteProps {

}

export function AddNote (props: IAddNoteProps) {
  return (
    <Note tags={['']} record={"Empty record"} />
  );
}

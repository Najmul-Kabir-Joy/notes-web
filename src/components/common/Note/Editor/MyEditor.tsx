import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const MyEditor = ({
  editorRef,
  inputs,
  setInputs,
}: {
  editorRef: React.MutableRefObject<object>;
  inputs: {
    title: string;
    note: string;
    tag: string;
  };
  setInputs: React.Dispatch<
    React.SetStateAction<{
      title: string;
      note: string;
      tag: string;
    }>
  >;
}) => {
  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      apiKey={process.env.EDITOR_API}
      initialValue={inputs.note}
      init={{
        height: 380,
        menubar: false,
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'code',
          'help',
          'wordcount',
        ],
        toolbar:
          'undo redo | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat',
        content_style:
          'div { font-family:Helvetica,Arial,sans-serif; font-size:14px,border: 5px solid red; padding: 3px;}',
      }}
      onChange={(evt) => {
        setInputs({ ...inputs, note: evt.target.getContent() });
      }}
    />
  );
};

export default MyEditor;

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
// eslint-disable-next-line import/no-extraneous-dependencies

const MyEditor = ({ editorRef }: { editorRef: React.MutableRefObject<object> }) => {
  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      apiKey={'c8b5jafm1fivhdjhfhli9w9eec2wsr3ewjbnxje444imixi7'}
      initialValue="Please enter your title"
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
    />
  );
};

export default MyEditor;

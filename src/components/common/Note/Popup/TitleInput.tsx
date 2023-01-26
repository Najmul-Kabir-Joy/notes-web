import React from 'react';
import InputField from './InputField';
import Title from './Title';

export type TitleInputType = {
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
  required?: boolean;
};

const TitleInput = ({ inputs, setInputs }: TitleInputType) => {
  return (
    <div>
      <Title text={'Enter a title'} />
      <InputField inputs={inputs} setInputs={setInputs} required={true} />
    </div>
  );
};

export default TitleInput;

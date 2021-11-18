import React, { PropsWithChildren } from "react";

interface IProps {
  name: string;
}

const Foo: PropsWithChildren<IProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default Foo;

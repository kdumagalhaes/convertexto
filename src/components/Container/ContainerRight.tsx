import { PropsWithChildren } from "react";

type ContainerRightProps = PropsWithChildren

const ContainerRight = ({ children }: ContainerRightProps) => {
  return <div>{children}</div>;
};

export default ContainerRight;
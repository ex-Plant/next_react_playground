type ServerComponentPropsT = {
  txt: string;
};

export const ServerComponent = ({ txt }: ServerComponentPropsT) => {
  console.log(txt);
  return <>{txt}</>;
};

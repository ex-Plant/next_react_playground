const handleChange = (e: any) => {
  const objName = e.target.name;
  const objVal = e.target.value;

  const dynamicObj = {
    [objName]: objVal,
  };

  console.log(dynamicObj);
};

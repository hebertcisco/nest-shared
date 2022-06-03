type TypeArgsParseFile = {
  fieldname: string;
  filename: string;
};
export const parseFile = ({ fieldname, filename }: TypeArgsParseFile) => {
  return {
    type: fieldname,
    name: filename,
  };
};

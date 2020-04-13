import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
//Each of the question supplied by the backend

const Option = ({question, index}) => {
  const handleClick = (index) => {
    //This just console logs for now, It can be made to push question and answer to History
    console.info(`You clicked Chip no. ${index}`);
  };
  return (
    <Chip
      avatar={<Avatar>{index}</Avatar>}
      label={question}
      clickable
      onClick={() => handleClick(index)}
    />
  );
};

export default Option;

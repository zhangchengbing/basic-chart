import React from 'react';

import CountOption from './CountOption';
import { INIT_OPTION } from '../lib/global';
import { OptionProps } from '../lib/type';

const Option: React.FC<OptionProps> = ({ option = INIT_OPTION, ...defaultProps }) => {
  console.log('%c [ option ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', option)
  return <CountOption {...defaultProps} option={option} />;
};

export default Option;

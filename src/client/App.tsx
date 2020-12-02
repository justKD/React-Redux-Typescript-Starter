import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from './redux/store';

import './styles/styles.scss';

export const App = (): React.ReactElement => {
  const { greeting } = useSelector((state: RootStateType) => state.AppSlice);
  return <h1 style={{ marginLeft: 30 }}>{greeting}</h1>;
};

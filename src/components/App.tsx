import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, FormControlLabel, Switch, Typography } from '@mui/material';
import { storage } from '../utils/localStorage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type Props = {
  title: string;
  toggleDelete: (isDelete: boolean) => void;
};

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const App: React.FC<Props> = ({ title, toggleDelete }) => {
  const onChange = (e: unknown, checked: boolean) => toggleDelete(checked);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={{
            fontSize: 'var(--font-size-xxl)',
            fontWeight: 'var(--font-weight-xxl)',
            lineHeight: 'var(--font-line-height-xxl)',
          }}
        >
          {title}
        </Typography>
        <FormControlLabel
          control={<Switch onChange={onChange} defaultChecked={storage.isDelete} />}
          label="殺しますよ"
          labelPlacement="start"
        />
      </Box>
    </ThemeProvider>
  );
};

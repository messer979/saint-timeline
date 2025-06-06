// GoToYearWidget.tsx
'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Menu, MenuItem } from '@mui/material';

interface GoToYearWidgetProps {
  onGoToYear: (year: number) => void;
}

const GoToYearWidget: React.FC<GoToYearWidgetProps> = ({ onGoToYear }) => {
  const [yearInput, setYearInput] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const quickYearOptions = [
    { year: -4000, label: '4000 BC', title: 'Creation' },
    { year: -2000, label: '2000 BC', title: 'Ancient Times' },
    { year: -500, label: '500 BC', title: 'Classical Antiquity' },
    { year: 0, label: '0 AD', title: 'Birth of Christ' },
    { year: 500, label: '500 AD', title: 'Early Middle Ages' },
    { year: 1000, label: '1000 AD', title: 'High Middle Ages' },
    { year: 1500, label: '1500 AD', title: 'Renaissance' },
    { year: 2000, label: '2000 AD', title: 'Modern' },
  ];

  const handleGoToYear = () => {
    const year = parseInt(yearInput);
    if (!isNaN(year)) {
      onGoToYear(year);
      setYearInput(''); // Clear input after navigation
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleGoToYear();
    }
  };

  const handleQuickSelectClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleQuickYearSelect = (year: number) => {
    onGoToYear(year);
    handleMenuClose();
  };

  return (
    <Box className="flex flex-wrap items-center gap-2">
      <TextField
        size="small"
        label="Go to Year"
        value={yearInput}
        type="number"
        onChange={(e) => setYearInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="e.g. 500, -100"
        variant="outlined"
        className="w-32"
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: 'transparent',
          },
          '& .MuiInputLabel-root': {
            color: 'rgb(31, 41, 55)',
            '&.Mui-focused': {
              color: 'rgb(59, 130, 246)',
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(31, 41, 55, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(31, 41, 55, 0.87)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(59, 130, 246)',
            },
          },
          '& .MuiInputBase-input': {
            color: 'rgb(31, 41, 55)',
          },
          '@media (prefers-color-scheme: dark)': {
            '& .MuiInputLabel-root': {
              color: 'rgb(229, 231, 235)',
              '&.Mui-focused': {
                color: 'rgb(59, 130, 246)',
              },
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(229, 231, 235, 0.23)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(229, 231, 235, 0.87)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgb(59, 130, 246)',
              },
            },
            '& .MuiInputBase-input': {
              color: 'rgb(229, 231, 235)',
            },
          },
          '.dark &': {
            '& .MuiInputLabel-root': {
              color: 'rgb(229, 231, 235)',
              '&.Mui-focused': {
                color: 'rgb(59, 130, 246)',
              },
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(229, 231, 235, 0.23)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(229, 231, 235, 0.87)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgb(59, 130, 246)',
              },
            },
            '& .MuiInputBase-input': {
              color: 'rgb(229, 231, 235)',
            },
          },
        }}
      />
      <Button
        variant="contained"
        size="small"
        onClick={handleGoToYear}
        disabled={!yearInput.trim()}
        sx={{
          backgroundColor: 'rgb(59, 130, 246)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgb(37, 99, 235)',
          },
          '&:disabled': {
            backgroundColor: 'rgba(31, 41, 55, 0.12)',
            color: 'rgba(31, 41, 55, 0.26)',
          },
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: 'rgb(59, 130, 246)',
            '&:hover': {
              backgroundColor: 'rgb(37, 99, 235)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(229, 231, 235, 0.12)',
              color: 'rgba(229, 231, 235, 0.26)',
            },
          },
          '.dark &': {
            backgroundColor: 'rgb(59, 130, 246)',
            '&:hover': {
              backgroundColor: 'rgb(37, 99, 235)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(229, 231, 235, 0.12)',
              color: 'rgba(229, 231, 235, 0.26)',
            },
          },
        }}
      >
        Go
      </Button>
      
      <Button
        variant="outlined"
        size="small"
        onClick={handleQuickSelectClick}
        aria-controls={open ? 'quick-year-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          borderColor: 'rgba(31, 41, 55, 0.23)',
          color: 'rgb(31, 41, 55)',
          '&:hover': {
            borderColor: 'rgba(31, 41, 55, 0.87)',
            backgroundColor: 'rgba(31, 41, 55, 0.04)',
          },
          '@media (prefers-color-scheme: dark)': {
            borderColor: 'rgba(229, 231, 235, 0.23)',
            color: 'rgb(229, 231, 235)',
            '&:hover': {
              borderColor: 'rgba(229, 231, 235, 0.87)',
              backgroundColor: 'rgba(229, 231, 235, 0.04)',
            },
          },
          '.dark &': {
            borderColor: 'rgba(229, 231, 235, 0.23)',
            color: 'rgb(229, 231, 235)',
            '&:hover': {
              borderColor: 'rgba(229, 231, 235, 0.87)',
              backgroundColor: 'rgba(229, 231, 235, 0.04)',
            },
          },
        }}
      >
        Quick Select Year
      </Button>
      
      <Menu
        id="quick-year-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'quick-select-button',
        }}
      >
        {quickYearOptions.map((option) => (
          <MenuItem 
            key={option.year} 
            onClick={() => handleQuickYearSelect(option.year)}
            title={option.title}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default GoToYearWidget;

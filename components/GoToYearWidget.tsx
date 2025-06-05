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
        onChange={(e) => setYearInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="e.g. 500, -100"
        variant="filled"
        className="w-32 dark:bg-gray-400 dark:text-gray-200 rounded-md"
      />
      <Button
        variant="contained"
        size="small"
        onClick={handleGoToYear}
        disabled={!yearInput.trim()}
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

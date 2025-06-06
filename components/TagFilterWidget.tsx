import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  OutlinedInput,
} from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';

interface TagFilterWidgetProps {
  availableTags: string[];
  selectedTags: string[];
  onTagsChange: (selectedTags: string[]) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, selectedTags: readonly string[], theme: Theme) {
  return {
    fontWeight:
      selectedTags.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TagFilterWidget({ 
  availableTags, 
  selectedTags, 
  onTagsChange 
}: TagFilterWidgetProps) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    onTagsChange(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }} size="small">
      <InputLabel 
        id="tag-filter-label" 
        variant="outlined"
        sx={{
          color: 'inherit',
          '&.Mui-focused': {
            color: 'inherit',
          },
        }}
      >
        Filter by Tags
      </InputLabel>
      <Select<string[]>
        labelId="tag-filter-label"
        id="tag-filter"
        multiple
        value={selectedTags}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Filter by Tags" />}
        renderValue={(selected: string[]) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} size="small" />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'transparent',
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.87)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            color: 'inherit',
          },
        }}
      >
        {availableTags.map((tag) => (
          <MenuItem
            key={tag}
            value={tag}
            style={getStyles(tag, selectedTags, theme)}
          >
            {tag}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

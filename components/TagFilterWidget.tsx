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
    sx: {
      '&.MuiPaper-root': {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
      '@media (prefers-color-scheme: dark)': {
        '&.MuiPaper-root': {
          backgroundColor: 'rgba(17, 24, 39, 0.9)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
      '.dark &.MuiPaper-root': {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      },
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
          color: 'rgb(31, 41, 55)',
          '&.Mui-focused': {
            color: 'rgb(59, 130, 246)',
          },
          '@media (prefers-color-scheme: dark)': {
            color: 'rgb(229, 231, 235)',
            '&.Mui-focused': {
              color: 'rgb(59, 130, 246)',
            },
          },
          '.dark &': {
            color: 'rgb(229, 231, 235)',
            '&.Mui-focused': {
              color: 'rgb(59, 130, 246)',
            },
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
              <Chip 
                key={value} 
                label={value} 
                size="small"
                sx={{
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: 'rgb(31, 41, 55)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  '@media (prefers-color-scheme: dark)': {
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    color: 'rgb(229, 231, 235)',
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                  },
                  '.dark &': {
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    color: 'rgb(229, 231, 235)',
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                  },
                }}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'transparent',
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
          '& .MuiSelect-icon': {
            color: 'rgb(31, 41, 55)',
          },
          '@media (prefers-color-scheme: dark)': {
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
            '& .MuiSelect-icon': {
              color: 'rgb(229, 231, 235)',
            },
          },
          '.dark &': {
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
            '& .MuiSelect-icon': {
              color: 'rgb(229, 231, 235)',
            },
          },
        }}
      >
        {availableTags.map((tag) => (
          <MenuItem
            key={tag}
            value={tag}
            style={getStyles(tag, selectedTags, theme)}
            sx={{
              color: 'rgb(31, 41, 55)',
              '&:hover': {
                backgroundColor: 'rgba(59, 130, 246, 0.04)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.12)',
                },
              },
              '@media (prefers-color-scheme: dark)': {
                color: 'rgb(229, 231, 235)',
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(59, 130, 246, 0.16)',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.24)',
                  },
                },
              },
              '.dark &': {
                color: 'rgb(229, 231, 235)',
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(59, 130, 246, 0.16)',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.24)',
                  },
                },
              },
            }}
          >
            {tag}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

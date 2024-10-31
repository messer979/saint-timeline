// MarkdownModal.tsx
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ReactMarkdown from 'react-markdown';

const MarkdownModal = ({ open, record, handleClose }) => {
  const convertYear = (year) => {
    // Check if the year is negative
    if (year < 0) {
      // Convert to absolute value and format it as BC
      return `${Math.abs(year)} BC`;
    }
    return `${Math.abs(year)}`; // For AD years, just return as string
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      	<DialogTitle>
          {record.end ? (
        	  <>{record.title} {convertYear(record.startYear)}-{convertYear(record.endYear)}</>
          ) : (
            <>{record.title} {convertYear(record.startYear)}</>
          )}
      	</DialogTitle>
      	<DialogContent dividers>
        	<ReactMarkdown>{record.longDescription}</ReactMarkdown>
      	</DialogContent>
    	<DialogActions>
        	<Button onClick={handleClose} color="primary">
        	  Close
        	</Button>
      	</DialogActions>
    </Dialog>
  );
};

export default MarkdownModal;

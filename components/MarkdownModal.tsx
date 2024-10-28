// MarkdownModal.tsx
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ReactMarkdown from 'react-markdown';
interface MarkdownModalProps {
  open: boolean; // Content to be displayed in the modal
  content: string; // Content to be displayed in the modal
  title: string; // Content to be displayed in the modal
  handleClose: () => void; // Content to be displayed in the modal
}

const MarkdownModal: React.FC<MarkdownModalProps> = ({ open, content, title, handleClose }) => {

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      	<DialogTitle>
      	  {title}
      	</DialogTitle>
      	<DialogContent dividers>
        	<ReactMarkdown>{content}</ReactMarkdown>
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

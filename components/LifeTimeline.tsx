// LifeTimeline.tsx
'use client';
import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { DataSet } from 'vis-timeline/standalone';
import { people } from './People';
import { keyEvents } from './Events';
import { heresies } from './Heresies';
import MarkdownModal from './MarkdownModal'; // Import the MUI modal component
import TimelineComponent from './TimelineComponent'; // Import the new timeline component
import GoToYearWidget from './GoToYearWidget';
import TagFilterWidget from './TagFilterWidget';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';


const LifeTimeline = () => {
  const [showSaints, setShowSaints] = useState(true);
  const [showEvents, setShowEvents] = useState(true);  const [showHeresies, setShowHeresies] = useState(true);
  const [saintSearchTerm, setSaintSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [modalRecord, setModalRecord] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const timelineControlsRef = useRef(null);

  // Handle timeline ready callback
  const handleTimelineReady = useCallback((controls) => {
    timelineControlsRef.current = controls;
  }, []);

  // Handle go to year from widget
  const handleGoToYear = useCallback((year) => {
    if (timelineControlsRef.current && timelineControlsRef.current.centerOnYear) {
      timelineControlsRef.current.centerOnYear(year);
    }  }, []);
  // Get all unique tags from people data
  const availableTags = useMemo(() => {
    const allTags = people.reduce((tags, person) => {
      return tags.concat(person.tags || []);
    }, []);
    return Array.from(new Set(allTags)).sort();
  }, []);

  // Handle tag selection change
  const handleTagsChange = useCallback((tags) => {
    setSelectedTags(tags);
  }, []);
  const items = useMemo(() => {
    // Filter people based on search term and selected tags
    const filteredPeople = people.filter(person => {
      // Search term filter
      if (saintSearchTerm !== '') {
        const nameMatch = person.name.toLowerCase().includes(saintSearchTerm.toLowerCase());
        const descMatch = person.description.toLowerCase().includes(saintSearchTerm.toLowerCase());
        const longDescMatch = person.longDescription.toLowerCase().includes(saintSearchTerm.toLowerCase());
        if (!(nameMatch || descMatch || longDescMatch)) {
          return false;
        }
      }
        // Tag filter (AND logic - person must have ALL selected tags)
      if (selectedTags.length > 0) {
        const personTags = person.tags || [];
        const hasAllSelectedTags = selectedTags.every(selectedTag => 
          personTags.includes(selectedTag)
        );
        if (!hasAllSelectedTags) {
          return false;
        }
      }
      
      return true;
    });
    const peopleItems = filteredPeople.map((person, index) => ({
      id: index + 1,
      content: `<span class="text-responsive saint-item">${person.name}</span>`,
      startYear:`${person.birthYear}`,
      start: `${person.birthYear}-01-01`,
      endYear:`${person.deathYear}`,
      end: `${person.deathYear}-01-01`,
      title: `${person.name}: ${person.description}`,
      group: 'Saints',
      longDescription: person.longDescription,
      className: 'saint-timeline-item'
    }));    const eventItems = keyEvents.map((event, index) => ({
      id: `e${index + 1}`,
      content: event.name,
      type: event.type,
      startYear:`${event.start}`,
      start: `${event.start}-01-01`,
      title: event.description,
      group: 'Events',
      longDescription: event.longDescription,
      className: 'event-timeline-item'
    }));
  const heresyItems = heresies.map((heresy, index) => ({
    id: `h${index + 1}`,
    content: `<span class="text-responsive">${heresy.name}</span>`,
    type: 'point',
    startYear: `${heresy.start}`,
    start: `${heresy.start}-01-01`,
    title: heresy.description,
    longDescription: heresy.longDescription,
    group: 'Heresies',
    className: 'heresy-timeline-item'
  }));
  return new DataSet([
    ...(showSaints ? peopleItems : []),
    ...(showEvents ? eventItems : []),
    ...(showHeresies ? heresyItems : [])
  ]);
  }, [showSaints, showEvents, showHeresies, saintSearchTerm, selectedTags]);

  const groups = useMemo(() => {
    return new DataSet([
      { id: "Saints", content: "Saints", visible:  showSaints, className: 'dark:text-white' },
      { id: "Events", content: "Events", visible: showEvents, className: 'dark:text-white' },
      { id: "Heresies", content: "Heresies", visible: showHeresies, className: 'dark:text-white' },

    ]);
  }, [showSaints, showEvents, showHeresies]);

  const options = {
    stack: true,
    orientation: 'top',
    margin: { item: 10 },
    editable: false,
    zoomable: true,
    start: '1000-01-01',
    end: '2000-01-01',
    min: '-004000-01-01',
    max: '2100-01-01',
    zoomMax: 31556952000000,
    selectable: false,
    groupHeightMode: "fixed"
  };

  const handleItemClick = useCallback((clickedItem) => {
    // Check if clickedItem is an object and contains longDescription
    if (clickedItem && typeof clickedItem === 'object' && 'longDescription' in clickedItem && clickedItem.longDescription != undefined) {
      setModalRecord(clickedItem); // Set the content for the modal
      setModalOpen(true);
    }
  }, []);
  const handleClose = useCallback(() => setModalOpen(false), []);
  const handleToggleSaints = useCallback(() => setShowSaints(prev => !prev), []);
  const handleToggleEvents = useCallback(() => setShowEvents(prev => !prev), []);
  const handleToggleHeresies = useCallback(() => setShowHeresies(prev => !prev), []);

  return (
    <div>      
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="inline-flex items-center text-gray-700 dark:text-gray-200">
            <Checkbox checked={showSaints} onChange={handleToggleSaints} className="mr-2" />
            Show Saints
          </label>
          <label className="inline-flex items-center text-gray-700 dark:text-gray-200">
            <Checkbox checked={showEvents} onChange={handleToggleEvents} className="mr-2" />
            Show Events
          </label>
          <label className="inline-flex items-center text-gray-700 dark:text-gray-200">
            <Checkbox checked={showHeresies} onChange={handleToggleHeresies} className="mr-2" />
            Show Heresies
          </label>        
        </div>
          <div className="flex items-center gap-2">          <TextField 
            id="saint-search"
            label="Search Saints"
            variant="filled"
            value={saintSearchTerm} 
            onChange={(e) => setSaintSearchTerm(e.target.value)}
            placeholder="Search saints by name or description..."
            size="small"
            sx={{
              '& .MuiInputLabel-root': {
                color: 'rgb(31, 41, 55)',
                '&.Mui-focused': {
                  color: 'rgb(59, 130, 246)',
                },
              },
              '& .MuiFilledInput-root': {
                backgroundColor: 'rgba(31, 41, 55, 0.09)',
                color: 'rgb(31, 41, 55)',
                '&:hover': {
                  backgroundColor: 'rgba(31, 41, 55, 0.13)',
                },
                '&.Mui-focused': {
                  backgroundColor: 'rgba(31, 41, 55, 0.16)',
                },
                '&:before': {
                  borderBottomColor: 'rgba(31, 41, 55, 0.42)',
                },
                '&:hover:before': {
                  borderBottomColor: 'rgba(31, 41, 55, 0.87)',
                },
                '&:after': {
                  borderBottomColor: 'rgb(59, 130, 246)',
                },
              },
              '& .MuiInputBase-input': {
                color: 'rgb(31, 41, 55)',
                '&::placeholder': {
                  color: 'rgba(31, 41, 55, 0.6)',
                  opacity: 1,
                },
              },
              '@media (prefers-color-scheme: dark)': {
                '& .MuiInputLabel-root': {
                  color: 'rgb(229, 231, 235)',
                  '&.Mui-focused': {
                    color: 'rgb(59, 130, 246)',
                  },
                },
                '& .MuiFilledInput-root': {
                  backgroundColor: 'rgba(229, 231, 235, 0.09)',
                  color: 'rgb(229, 231, 235)',
                  '&:hover': {
                    backgroundColor: 'rgba(229, 231, 235, 0.13)',
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(229, 231, 235, 0.16)',
                  },
                  '&:before': {
                    borderBottomColor: 'rgba(229, 231, 235, 0.42)',
                  },
                  '&:hover:before': {
                    borderBottomColor: 'rgba(229, 231, 235, 0.87)',
                  },
                  '&:after': {
                    borderBottomColor: 'rgb(59, 130, 246)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'rgb(229, 231, 235)',
                  '&::placeholder': {
                    color: 'rgba(229, 231, 235, 0.6)',
                    opacity: 1,
                  },
                },
              },
              '.dark &': {
                '& .MuiInputLabel-root': {
                  color: 'rgb(229, 231, 235)',
                  '&.Mui-focused': {
                    color: 'rgb(59, 130, 246)',
                  },
                },
                '& .MuiFilledInput-root': {
                  backgroundColor: 'rgba(229, 231, 235, 0.09)',
                  color: 'rgb(229, 231, 235)',
                  '&:hover': {
                    backgroundColor: 'rgba(229, 231, 235, 0.13)',
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(229, 231, 235, 0.16)',
                  },
                  '&:before': {
                    borderBottomColor: 'rgba(229, 231, 235, 0.42)',
                  },
                  '&:hover:before': {
                    borderBottomColor: 'rgba(229, 231, 235, 0.87)',
                  },
                  '&:after': {
                    borderBottomColor: 'rgb(59, 130, 246)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'rgb(229, 231, 235)',
                  '&::placeholder': {
                    color: 'rgba(229, 231, 235, 0.6)',
                    opacity: 1,
                  },
                },
              },
            }}
          />
          {saintSearchTerm && (
            <button
              onClick={() => setSaintSearchTerm('')}
              className="px-2 py-1 text-sm text-gray-500 dark:text-white-400 hover:text-gray-700 dark:hover:text-gray-300"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div><div className="flex items-center gap-4">
          <GoToYearWidget onGoToYear={handleGoToYear} />
          <TagFilterWidget 
            availableTags={availableTags}
            selectedTags={selectedTags}
            onTagsChange={handleTagsChange}
          />
        </div>
      </div>      
      <TimelineComponent
        items={items}
        groups={groups}
        options={options}
        onItemClick={handleItemClick}
        onTimelineReady={handleTimelineReady}
      />

      {/* MUI Modal Component */}
      <MarkdownModal
        open={modalOpen}
        record={modalRecord}
        handleClose={handleClose}
      />
    </div>
  );
};

export default LifeTimeline;

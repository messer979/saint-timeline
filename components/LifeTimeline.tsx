// LifeTimeline.tsx
'use client';
import React, { useState,useMemo, useCallback, useEffect } from 'react';
import { DataSet } from 'vis-timeline/standalone';
import { people } from './People';
import { keyEvents } from './Events';
import { heresies } from './Heresies';
import MarkdownModal from './MarkdownModal'; // Import the MUI modal component
import TimelineComponent from './TimelineComponent'; // Import the new timeline component
import Checkbox from '@mui/material/Checkbox';


const LifeTimeline = () => {
  const [showSaints, setShowSaints] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [showHeresies, setShowHeresies] = useState(true);
  const [modalRecord, setModalRecord] = useState({});
  const [modalOpen, setModalOpen] = useState(false);


  const items = useMemo(() => {
    const peopleItems = people.map((person, index) => ({
      id: index + 1,
      content: `<span class="text-responsive">${person.name}</span>`,
      startYear:`${person.birthYear}`,
      start: `${person.birthYear}-01-01`,
      endYear:`${person.deathYear}`,
      end: `${person.deathYear}-01-01`,
      title: `${person.name}: ${person.description}`,
      group: 'Saints',
      longDescription: person.longDescription
    }));

    const eventItems = keyEvents.map((event, index) => ({
      id: `e${index + 1}`,
      content: event.name,
      type: event.type,
      startYear:`${event.start}`,
      start: `${event.start}-01-01`,
      title: event.description,
      group: 'Events',
      longDescription: event.longDescription,
      style: "color: white;"
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
    style: "color: crimson;",
  }));

  return new DataSet([
    ...(showSaints ? peopleItems : []),
    ...(showEvents ? eventItems : []),
    ...(showHeresies ? heresyItems : [])
  ]);
  }, []);

  const groups = useMemo(() => {
    return new DataSet([
      { id: "Events", content: "Events", visible: showEvents },
      { id: "Saints", content: "Saints", visible:  showSaints},
      { id: "Heresies", content: "Heresies", visible: showHeresies },

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
      <div className="mb-2">
        <label className="inline-flex items-center">
          <Checkbox checked={showSaints} onChange={handleToggleSaints} className="mr-2" />
          Show Saints
        </label>
        <label className="inline-flex items-center ml-2">
          <Checkbox checked={showEvents} onChange={handleToggleEvents} className="mr-2" />
          Show Events
        </label>
        <label className="inline-flex items-center ml-2">
          <Checkbox checked={showHeresies} onChange={handleToggleHeresies} className="mr-2" />
          Show Heresies
        </label>
      </div>

      <TimelineComponent
        items={items}
        groups={groups}
        options={options}
        onItemClick={handleItemClick}
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

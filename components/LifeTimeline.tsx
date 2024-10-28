// LifeTimeline.tsx
'use client';
import React, { useState,useMemo, useCallback } from 'react';
import { DataSet } from 'vis-timeline/standalone';
import { people } from './People';
import { keyEvents } from './Events';
import MarkdownModal from './MarkdownModal'; // Import the MUI modal component
import TimelineComponent from './TimelineComponent'; // Import the new timeline component

const LifeTimeline = () => {
  const [showSaints, setShowSaints] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState(false);


  const items = useMemo(() => {
    const peopleItems = people.map((person, index) => ({
      id: index + 1,
      content: person.name,
      start: `${person.birthYear}-01-01`,
      end: `${person.deathYear}-01-01`,
      title: person.description,
      group: 'Saints'
      // longDescription: person.longDescription
    }));

    const eventItems = keyEvents.map((event, index) => ({
      id: `e${index + 1}`,
      content: event.name,
      type: event.type,
      start: `${event.start}-01-01`,
      title: event.description,
      group: 'Events',
      longDescription: event.longDescription,
      style: "color: white;"
    }));

    return new DataSet([
      ...(showSaints ? peopleItems : []),
      ...(showEvents ? eventItems : [])
    ]);
  }, [showSaints, showEvents]);

  const groups = useMemo(() => {
    return new DataSet([
      { id: "Events", content: "Events" },
      { id: "Saints", content: "Saints" },
    ]);
  }, []);

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
    selectable: false
  };

  const handleItemClick = useCallback((clickedItem) => {
    // Check if clickedItem is an object and contains longDescription
    console.log(clickedItem)
    if (clickedItem && typeof clickedItem === 'object' && 'longDescription' in clickedItem && clickedItem.longDescription != undefined) {
      setModalContent(clickedItem.longDescription || ""); // Set the content for the modal
      setModalTitle(clickedItem.content)
      setModalOpen(true);
    }
  }, []);

  const handleClose = useCallback(() => setModalOpen(false), []);

  const handleToggleSaints = useCallback(() => setShowSaints(prev => !prev), []);
  const handleToggleEvents = useCallback(() => setShowEvents(prev => !prev), []);

  return (
    <div>
      <div className="mb-2">
        <label className="inline-flex items-center">
          <input type="checkbox" checked={showSaints} onChange={handleToggleSaints} className="mr-2" />
          Show Saints
        </label>
        <label className="inline-flex items-center ml-2">
          <input type="checkbox" checked={showEvents} onChange={handleToggleEvents} className="mr-2" />
          Show Events
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
        content={modalContent}
        title={modalTitle}
        handleClose={handleClose}
      />
    </div>
  );
};

export default LifeTimeline;

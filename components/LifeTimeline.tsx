'use client'
import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';

const LifeTimeline = ({ people }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const items = new DataSet(
      people.map((person, index) => ({
        id: index + 1,
        content: person.name,
        start: `${person.birthYear}-01-01`,
        end: `${person.deathYear}-01-01`,
        title: person.description
      }))
    );

    const options = {
      stack: true,
      orientation: 'top',
      margin: { item: 10 },
      editable: false,
      zoomable: true,
      start: '-004000-01-01',
      end: '2000-01-01',
      min: '-004000-01-01',
      max: '2100-01-01',
    };

    const timeline = new Timeline(container, items, options);

    return () => {
      timeline.destroy();
    };
  }, [people]);

  return (
    <div ref={timelineRef} style={{ height: '400px' }} />
  );
};

export default LifeTimeline;

// TimelineComponent.tsx
import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';


const TimelineComponent = ({ items, groups, options, onItemClick }) => {
  const timelineRef = useRef(null);
  const timeline = useRef({})

  useEffect(() => {
    const container = timelineRef.current;
    if (container) {
      timeline.current = new Timeline(container, items, groups, options);

      // Handle item clicks
      timeline.current.on('click', (params) => {
        const clickedItem = items.get(params.item);
        onItemClick(clickedItem); // Use the callback to handle clicks
      });

      return () => {
        timeline.current.destroy(); // Cleanup the timeline on component unmount
      };
    }
  }, []);

  useEffect(() => {
    console.log(timeline.current)
    timeline.current.setGroups(groups)
  }, [groups])

  return <div ref={timelineRef} style={{ height: '400px' }} />;
};

export default TimelineComponent;

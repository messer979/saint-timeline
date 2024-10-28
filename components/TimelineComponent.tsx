// TimelineComponent.tsx
import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';

interface TimelineProps {
  items: any; // Use the appropriate type for items
  groups: any; // Use the appropriate type for groups
  options: any; // Use the appropriate type for options
  onItemClick: (item: any) => void; // Callback for item clicks
}

const TimelineComponent: React.FC<TimelineProps> = ({ items, groups, options, onItemClick }) => {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = timelineRef.current;
    if (container) {
      const timeline = new Timeline(container, items, groups, options);

      // Handle item clicks
      timeline.on('click', (params) => {
        const clickedItem = items.get(params.item);
        console.log('clicked', clickedItem)
        onItemClick(clickedItem); // Use the callback to handle clicks
      });

      return () => {
        timeline.destroy(); // Cleanup the timeline on component unmount
      };
    }
  }, []);

  return <div ref={timelineRef} style={{ height: '400px' }} />;
};

export default TimelineComponent;

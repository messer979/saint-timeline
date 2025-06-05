// TimelineComponent.tsx
import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';


const TimelineComponent = ({ items, groups, options, onItemClick, onTimelineReady }) => {
  const timelineRef = useRef(null);
  const timeline = useRef({})
  
  useEffect(() => {
    const container = timelineRef.current;
    if (container) {
      timeline.current = new Timeline(container, items, groups, options);

      // Expose timeline controls to parent
      if (onTimelineReady) {
        onTimelineReady({
          centerOnYear: (year) => {
            if (timeline.current && timeline.current.moveTo) {
              // Convert year to date string that vis-timeline can handle
              let dateStr;
              if (year < 0) {
                // For BC years, use negative year format
                const bcYear = Math.abs(year);
                dateStr = `-${bcYear.toString().padStart(6, '0')}-01-01`;
              } else {
                dateStr = `${year.toString().padStart(4, '0')}-01-01`;
              }
              
              timeline.current.moveTo(dateStr, {
                animation: {
                  duration: 1000,
                  easingFunction: 'easeInOutQuad'
                }
              });
            }
          }
        });
      }

      // Handle item clicks
      timeline.current.on('click', (params) => {
        if (params.item) {
          const clickedItem = items.get(params.item);
          onItemClick(clickedItem); // Use the callback to handle clicks
        }
      });

      return () => {
        timeline.current.destroy(); // Cleanup the timeline on component unmount
      };
    }
  }, []);
  useEffect(() => {
    timeline.current.setGroups(groups)
  }, [groups])
  useEffect(() => {
    if (timeline.current && timeline.current.setItems) {
      timeline.current.setItems(items);
      
      // Rebind the click handler for the new items
      timeline.current.off('click'); // Remove old handler
      timeline.current.on('click', (params) => {
        if (params.item) {
          const clickedItem = items.get(params.item);
          onItemClick(clickedItem);
        }
      });
    }
  }, [items, onItemClick])

  return <div ref={timelineRef} style={{ height: '400px' }} />;
};

export default TimelineComponent;

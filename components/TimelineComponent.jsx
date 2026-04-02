// TimelineComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';


const TimelineComponent = ({ items, groups, options, onItemClick, onTimelineReady }) => {
  const timelineRef = useRef(null);
  const timeline = useRef({});
  const [saintsExpanded, setSaintsExpanded] = useState(false);

  // Calculate height: 40vh default for saints section, expanded = auto
  const timelineHeight = saintsExpanded ? '85vh' : '40vh';

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

  // Redraw timeline when height changes
  useEffect(() => {
    if (timeline.current && timeline.current.redraw) {
      timeline.current.redraw();
    }
  }, [saintsExpanded]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={timelineRef} style={{ height: timelineHeight, transition: 'height 0.3s ease' }} />
      <button
        onClick={() => setSaintsExpanded(prev => !prev)}
        title={saintsExpanded ? 'Collapse timeline' : 'Expand timeline to see more saints'}
        style={{
          position: 'absolute',
          right: '8px',
          top: '8px',
          zIndex: 10,
          padding: '4px 10px',
          fontSize: '12px',
          borderRadius: '4px',
          border: '1px solid rgba(107, 114, 128, 0.4)',
          cursor: 'pointer',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#374151',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
        className="dark:!bg-gray-800 dark:!text-gray-200 dark:!border-gray-600"
      >
        {saintsExpanded ? '▲ Collapse' : '▼ Expand'}
      </button>
    </div>
  );
};

export default TimelineComponent;

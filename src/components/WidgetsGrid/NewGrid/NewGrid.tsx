import React, { createRef, useLayoutEffect, useRef } from 'react';
import { GridStack } from 'gridstack'
import GridWidgetRenderer from '@components/WidgetsGrid/GridWidgetRenderer'

const NewGrid: React.FC = ({ onAdd, widgets, onDelete, onChange }) => {
  const refs = useRef({})
  const gridRef = useRef<GridStack>()
  const gridContainerRef = useRef(null)
  refs.current = {}

  if (Object.keys(refs.current).length !== widgets.length) {
    widgets.forEach(({ id }) => {
      refs.current[id] = refs.current[id] || createRef()
    })
  }

  useLayoutEffect(() => {
    if (!gridRef.current) {
      // no need to init twice (would will return same grid) or register dup events
      const grid = gridRef.current = GridStack.init(
        {
          float: true,
          acceptWidgets: true,
          cellHeight: '100px',
          disableOneColumnMode: true, // side-by-side and fever columns to fit smaller screens
          column: 12,
          minRow: 15,
        },
        gridContainerRef.current
      )
        .on('added', (ev, gswidgets) => {
          if (grid._ignoreCB) return;
          // remove the new element as React will re-create it again (dup) once we add to the list or we get 2 of them with same ids but different DOM el!
          // TODO: this is really not ideal - we shouldn't mix React templating with GS making it own edits as those get out of sync! see comment below ~96.
          gswidgets.forEach(n => {
            grid.removeWidget(n.el, true, false); // true=remove DOM, false=don't call use back!
            // can't pass n directly even though similar structs as it has n.el.gridstackNode which gives JSON error for circular write.
            onAdd({id:n.id, x:n.x, y:n.y, w:n.w, h:n.h});
          });
        })
        .on('removed change', () => {
          // synch our version from GS....
          // Note: we could just update those few widgets passed but save() is fast and it's easier to just set an entire new list
          // and since we have the same ids, React will not re-create anything...
          const newwidgets = grid.save(false); // saveContent=false
          onChange(newwidgets);
        })
      // addEvents(grid, i);
    } else {
      //
      // update existing GS layout, which is optimized to updates only diffs and add new/delete widgets as well
      //
      const grid = gridRef.current;
      const layout = widgets.map((a) =>
        // use exiting nodes (which will skip diffs being the same) else new elements Widget but passing the React dom .el so we know what to makeWidget() on!
        refs.current[a.id].current.gridstackNode || {...a, el: refs.current[a.id].current}
      );
      grid._ignoreCB = true; // hack: ignore added/removed since we're the one doing the update
      grid.load(layout);
      delete grid._ignoreCB;
    }

  }, [widgets])

  return (
    // ********************
    // NOTE: constructing DOM grid widgets in template when gridstack is also allowed creating (dragging between grids, or adding/removing from say a toolbar)
    // is NOT A GOOD IDEA as you end up fighting between gridstack users' edits and your template widgets structure which are not in sync.
    // At best, you end up re-creating widgets DOM (from React template) and all their content & state after a widget was inserted/re-parented by the user.
    // a MUCH better way is to let GS create React components using it's API/user interactions, with only initial load() of a stored layout.
    // See the Angular component wrapper that does that: https://github.com/gridstack/gridstack.js/tree/master/demo/angular/src/app (lib author uses Angular)
    // ...TBD creating React equivalent...
    //
    // Also templating forces you to spell out the 15+ GridStackWidget attributes (only x,y,w,h done below), instead of passing an option structure that
    // supports everything, is not robust as things get added and pollutes the DOM attr for default/missing entries, vs the optimized code in GS.
    // ********************
    <div style={{ width: '100%', marginRight: '10px' }}>
      <div className="grid-stack" ref={gridContainerRef}>
        {widgets.map((widget, i) => {
          return (
            <GridWidgetRenderer
              key={`${widget.id}-${i}`}
              widget={widget}
              ref={refs.current[widget.id!]}
              onDelete={onDelete}
            />
          )
        })}
      </div>
      <code>
        <pre>{JSON.stringify(widgets, null, 2)}</pre>
      </code>
    </div>
  )
};

export default NewGrid;

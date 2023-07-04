import React, { createRef, MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react';
import { GridStack, GridStackNode, GridStackOptions } from 'gridstack'
import { GridStackWidget, GridStackElement } from 'gridstack/dist/types'
import GridWidgetRenderer from '@components/WidgetsGrid/GridWidgetRenderer'

const gridOptions = {
  float: true,
  acceptWidgets: true,
}

interface ControlledStackProps {
  items: GridStackWidget[],
  addItem?: (item: GridStackWidget) => void
  changeItems?: (items: GridStackWidget[]) => void
  deleteItem?: (item: GridStackWidget) => void
  options?: Partial<GridStackOptions>
}
//
const ControlledStack: React.FC<ControlledStackProps> = ({
  items,
  addItem,
  changeItems,
  deleteItem,
  options
}) => {
  return null;
}
//   const refs = useRef<{[key: string]: MutableRefObject<GridStackElement>}>({})
//   const gridRef = useRef<GridStack>()
//   const containerRef = useRef<HTMLDivElement>()
//
//   if (Object.keys(refs.current).length !== items.length) {
//     items.forEach(({ id }) => {
//       refs.current[id!] = refs.current[id!] || createRef()
//     })
//   }
//
//   useLayoutEffect(() => {
//     if (!gridRef.current) {
//       // no need to init twice (would will return same grid) or register dup events
//       const grid = gridRef.current = GridStack.init({ ...gridOptions, ...options }, containerRef.current)
//         .on('added', (ev: Event, gsItems: GridStackNode[]) => {
//           if (grid._ignoreCB) return;
//           // remove the new element as React will re-create it again (dup) once we add to the list or we get 2 of them with same ids but different DOM el!
//           // TODO: this is really not ideal - we shouldn't mix React templating with GS making it own edits as those get out of sync! see comment below ~96.
//           gsItems.forEach(n => {
//             grid.removeWidget(n.el, true, false); // true=remove DOM, false=don't call use back!
//             // can't pass n directly even though similar structs as it has n.el.gridstackNode which gives JSON error for circular write.
//             addItem({id:n.id, x:n.x, y:n.y, w:n.w, h:n.h});
//           });
//         })
//         .on('removed change', () => {
//           const newItems = grid.save(false);
//           changeItems(newItems);
//         })
//     } else {
//       const grid = gridRef.current;
//       const layout = items.map((a) =>
//         refs.current[a.id!].current?.gridstackNode || {...a, el: refs.current[a.id!].current}
//       );
//       grid._ignoreCB = true;
//       grid.load(layout);
//       delete grid._ignoreCB;
//     }
//
//   }, [items])
//
//   // useEffect(() => {
//   //   const grid = getGridStack()
//   //   grid.batchUpdate()
//   //   grid.removeAll(false)
//   //   items.forEach(({ id }) => grid.makeWidget(refs.current[id!]?.current))
//   //   grid.batchUpdate(false)
//   // }, [items])
//   //
//   // const getGridStack = () => {
//   //   const grid = gridRef.current = gridRef.current ||
//   //     GridStack
//   //       .init({ ...gridOptions, ...options }, containerRef.current)
//   //       .on('change', () => {
//   //         const changes = grid?.save(false)
//   //         console.log('changes', changes);
//   //         changeItems(changes);
//   //       })
//   //       .on('dropped', (ev, gsItems) => {
//   //         gsItems.forEach(n => {
//   //           grid.removeWidget(n.el, true, false);
//   //           addItem({id: n.id, x: n.x, y: n.y, w: n.w, h: n.h});
//   //         })
//   //       })
//   //   return grid
//   // }
//
//   return (
//     <div ref={containerRef} className="grid-stack">
//       {items.map((item, i) => {
//         return (
//           <GridWidgetRenderer
//             key={`${item.id}-${i}`}
//             widget={item}
//             ref={refs.current[item.id!]}
//             onDelete={deleteItem}
//           />
//         )
//       })}
//     </div>
//   )
// };
//
export default ControlledStack;

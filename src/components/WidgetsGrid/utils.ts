import { GridStack, GridStackNode } from 'gridstack'
import { GridStackWidget } from 'gridstack/dist/types'
import { pick } from 'lodash'

export const addGridEvents = (
  grid: GridStack,
  id: string,
) => {
  const g = (id !== undefined ? 'grid' + id + ' ' : '')

  grid.on('added removed change', (event: Event, items: any) => {
    let str = ''
    items.forEach((item: GridStackNode) => { str += ' (' + item.x + ',' + item.y + ' ' + item.w + 'x' + item.h + ')' })
    console.log(g + event.type + ' ' + items.length + ' items (x,y w h):' + str );
  });

  grid.on('enable', (event: Event) => {
    let grid = event.target;
    console.log(g + 'enable');
  });

  grid.on('disable', (event: Event) => {
    let grid = event.target;
    console.log(g + 'disable');
  });

  grid.on('dragstart', (event: Event, el: any) => {
    const node = el.gridstackNode
    const x = el.getAttribute('gs-x') // verify node (easiest) and attr are the sam
    const y = el.getAttribute('gs-y')
    console.log(g + 'dragstart ' + el.textContent + ' pos: (' + node.x + ',' + node.y + ') = (' + x + ',' + y + ')')
  })

  grid.on('drag', (event: Event, el: any) => {
    let node = el.gridstackNode;
    let x = el.getAttribute('gs-x'); // verify node (easiest) and attr are the same
    let y = el.getAttribute('gs-y');
    // console.log(g + 'drag ' + el.textContent + ' pos: (' + node.x + ',' + node.y + ') = (' + x + ',' + y + ')');
  });

  grid.on('dragstop', (event: Event, el: any) => {
    const node = el.gridstackNode;
    const x = el.getAttribute('gs-x') // verify node (easiest) and attr are the same
    const y = el.getAttribute('gs-y')
    console.log(g + 'dragstop ' + el.textContent + ' pos: (' + node.x + ',' + node.y + ') = (' + x + ',' + y + ')');
  });

  grid.on('dropped', (event, previousNode, newNode) => {
    if (previousNode) {
      console.log(g + 'dropped - Removed widget from grid:', previousNode);
    }
    if (newNode) {
      console.log(g + 'dropped - Added widget in grid:', newNode);
    }
  });

  grid.on('resizestart', (event: Event, el: any) => {
    const n = el.gridstackNode;
    const w = parseInt(el.getAttribute('gs-w')) // verify node (easiest) and attr are the same
    const h = parseInt(el.getAttribute('gs-h'))
    if (w !== n.w || h !== n.h) alert('resizestart missmatch')
    const rec = el.getBoundingClientRect()
    console.log(`${g} resizestart ${el.textContent} size: (${n.w}x${n.h}) = (${Math.round(rec.width)}x${Math.round(rec.height)})px`)

  });

  grid.on('resize', (event: Event, el: any) => {
    const n = el.gridstackNode;
    const rec = el.getBoundingClientRect()
    console.log(`${g} resize ${el.textContent} size: (${n.w}x${n.h}) = (${Math.round(rec.width)}x${Math.round(rec.height)})px`)
  });

  grid.on('resizestop', (event: Event, el: any) => {
    const n = el.gridstackNode
    const w = parseInt(el.getAttribute('gs-w')) // verify node (easiest) and attr are the same
    const h = parseInt(el.getAttribute('gs-h'))
    if (w !== n.w || h !== n.h) alert('resizestop missmatch')
    const rec = el.getBoundingClientRect()
    console.log(`${g} resizestop ${el.textContent} size: (${n.w}x${n.h}) = (${Math.round(rec.width)}x${Math.round(rec.height)})px`)
  });
}

const getWidgetFromNode = (node: GridStackNode): GridStackWidget => {
  return pick(node, 'x, y, w, h,  maxH, maxW')
}

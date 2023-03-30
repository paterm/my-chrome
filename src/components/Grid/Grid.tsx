import React, { PureComponent } from 'react'
import RGL, { Layout, WidthProvider } from 'react-grid-layout'
import Widget from '@components/Grid/Widget'
import {getRecoil, setRecoil} from 'recoil-nexus'
import { draggingWidgetState } from '@state/widgets.state'

const ReactGridLayout = WidthProvider(RGL)

interface GridLayoutProps {
  className?: string
  items: Layout[]
  cols?: number
  rowHeight?: number
  onLayoutChange?: (layout: Layout[]) => void
}

interface GridLayoutState {
  layout?: Layout[]
}


export default class GridLayout extends PureComponent<GridLayoutProps, GridLayoutState> {
  static defaultProps = {
    className: "layout",
    items: [],
    cols: 12,
    rowHeight: 60,
    onLayoutChange: function() {},
    // This turns off compaction so you can place items wherever.
    verticalCompact: false
  };

  constructor(props: GridLayoutProps) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
  }

  generateDOM() {
    return this.props.items.map((layout) => {
      const {i, ...other} = layout
      return (
        <div key={i} data-grid={other}>
          <Widget widget={layout}/>
        </div>
      );
    });
  }

  handleLayoutChange(layout: Layout[]) {
    this.props.onLayoutChange?.(layout);
  }

  handleDrop(layout: Layout[], layoutItem: Layout, event: Event) {
    const droppingLayout = {...getRecoil(draggingWidgetState)} as Layout
    setRecoil(draggingWidgetState, null)
    droppingLayout.x = layoutItem.x;
    droppingLayout.y = layoutItem.y;

    const newLayouts = [
      ...layout.filter(({i}) => i !== '__dropping-elem__'),
      droppingLayout,
    ]

    this.props.onLayoutChange?.(newLayouts)
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.props.items}
        onLayoutChange={this.handleLayoutChange}
        onDrop={this.handleDrop}
        isDroppable
        measureBeforeMount={false}
        useCSSTransforms={false}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

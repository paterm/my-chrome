import React, { PureComponent } from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
import Widget from '@components/Grid/Widget'
import {getRecoil, setRecoil} from 'recoil-nexus'
import { draggingWidgetState, IWidgetLayout } from '@state/widgets.state'

const ReactGridLayout = WidthProvider(RGL)

interface GridLayoutProps {
  className?: string
  items: IWidgetLayout[]
  cols?: number
  rowHeight?: number
  onLayoutChange?: (layout: IWidgetLayout[]) => void
}

interface GridLayoutState {
  layout?: IWidgetLayout[]
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

  handleLayoutChange(layout: IWidgetLayout[]) {
    this.props.onLayoutChange?.(layout);
  }

  handleDrop(layout: IWidgetLayout[], layoutItem: IWidgetLayout, event: Event) {
    const droppingLayout = {...getRecoil(draggingWidgetState)} as IWidgetLayout
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

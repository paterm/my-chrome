import React, { ChangeEvent, MouseEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Menu, MenuItem, SvgIconProps, TextField } from '@mui/material'
import { Container, Header, Content, PaperContainer, StyledTextFiled } from './styled';
import { EWidgetID } from '@const/widgetName';
import { useRecoilState } from 'recoil';
import { IWidgetLayout, widgetsState } from '@state/widgets.state';

interface WidgetWrapProps {
  children: React.ReactNode
  Icon?: React.ElementType<SvgIconProps>
  widgetID: EWidgetID
}

/** TODO: закончил на создании контекстного меню для настроек виджета и его переименования */
const WidgetWrap: React.FC<WidgetWrapProps> = ({
  Icon,
  children,
  widgetID,
}) => {
  const [contextMenu, setContextMenu] = useState<{top: number, left: number} | null>(null);
  const [widgets, setWidgets] = useRecoilState(widgetsState);
  const widget = useMemo(() => widgets.find(({i}) => i === widgetID), [widgets, widgetID]);
  const [isEditTitleMode, setIsEditTitleMode] = useState(false);
  const [titleValue, setTitleValue] = useState(widget?.title ?? "");

  const inputRef = useRef<HTMLInputElement>(null)

  /** Устанавливает значение заголовка для инпута */
  useEffect(() => {
    if (widget?.title && widget.title !== titleValue) {
      setTitleValue(widget.title);
    }
  }, [widget])

  useEffect(() => {
    if (isEditTitleMode) {
      inputRef.current?.focus()
    }
  }, [isEditTitleMode]);

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setContextMenu(contextMenu === null ? {top: e.clientY + 2, left: e.clientX - 6} : null);
  }

  const handleChangeShowHeader = () => {
    updateWidget((w) => {
      w.showHeader = !w.showHeader;
      return w;
    });
  }

  const handleRename = () => {
    setContextMenu(null)
    setIsEditTitleMode(true)
  }

  const handleChangeTitleValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitleValue(e.target.value);
  }

  const handleEndEditing = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateWidget((w) => {
        w.title = titleValue;
        return w;
      })
      setIsEditTitleMode(false);
    }
  }

  const updateWidget = (cb: (widget: IWidgetLayout) => IWidgetLayout) => {
    setWidgets((prevWidgets) => {
      return prevWidgets.map((prevWidget) => {
        let newWidget = {...prevWidget};
        if (newWidget.i === widgetID) {
          newWidget = {...newWidget, ...cb(newWidget)};
          console.log('newWidget', newWidget);
        }
        return newWidget;
      });
    })
  }

  return (
    <PaperContainer elevation={24}>
      <Container onContextMenu={handleContextMenu}>
        {(widget?.showHeader && widget?.title) && (
          <Header>
            {Icon && <Icon style={{marginRight: '.5rem'}} />}
            {isEditTitleMode ? (
              <StyledTextFiled
                inputRef={inputRef}
                size="small"
                value={titleValue}
                onChange={handleChangeTitleValue}
                onKeyDown={handleEndEditing}
                autoFocus
                variant="outlined"
              />
            ) : widget.title}
          </Header>
        )}
        <Content>{children}</Content>

        <Menu
          open={contextMenu !== null}
          onClose={() => setContextMenu(null)}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.top, left: contextMenu.left }
              : undefined
          }
        >
          <MenuItem onClick={handleChangeShowHeader}>{widget?.showHeader ? 'Hide' : 'Show'} header</MenuItem>
          <MenuItem onClick={handleRename}>Rename</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </Container>
    </PaperContainer>
  )
}

export default WidgetWrap

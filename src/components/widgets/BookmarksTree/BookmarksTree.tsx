import React, { useEffect, useState } from 'react'
import mockup from './mockup.json'
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode
import s from './BookmarksTree.module.scss'
import { TreeView } from '@mui/lab'
import StarIcon from '@mui/icons-material/Star'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FolderIcon from '@mui/icons-material/Folder'
import { StyledTreeItem } from '@components/widgets/BookmarksTree/styled'
import WidgetWrap from '@components/widgets/WidgetWrap'
import { getUrlFavicon } from '@utils/getUrlFavicon';
import { EWidgetID } from '@const/widgetName';


const BookmarksTree: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkTreeNode[]>()

  useEffect(() => {
    if (chrome?.bookmarks) {
      chrome?.bookmarks?.getTree((tree) => {
        setBookmarks(tree?.[0]?.children)
      })
    } else {
        setBookmarks(mockup[0].children)
    }
  }, [])

  const renderItem = (bookmark: BookmarkTreeNode) => (
    <StyledTreeItem
      key={bookmark.id}
      nodeId={bookmark.id}
      labelText={bookmark.title}
      url={bookmark.url}
      labelIcon={bookmark.children?.length
        ? <FolderIcon color="inherit" />
        : <img className={s.favicon} src={getUrlFavicon(bookmark.url)} alt="" />
    }
    >
      {bookmark.children?.map(renderItem)}
    </StyledTreeItem>
  )

  return (
    <WidgetWrap
      widgetID={EWidgetID.BOOKMARKS_TREE}
      title="Закладки"
      Icon={StarIcon}
    >
      <TreeView
        classes={{
          root: s.tree
        }}
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        {bookmarks?.map(renderItem)}
      </TreeView>
    </WidgetWrap>
  )
}

export default BookmarksTree

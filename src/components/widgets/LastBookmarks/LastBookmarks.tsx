import React, { useEffect, useState } from 'react'
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import s from './LastBookmarks.module.scss'
import mockup from './mockup.json'
import WidgetWrap from '@components/widgets/WidgetWrap'

const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/


const LastBookmarks: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkTreeNode[]>()
  const theme = useTheme()

  useEffect(() => {
    if (chrome?.bookmarks) {
      chrome?.bookmarks?.getRecent(5, (recentBookmarks) => {
        setBookmarks(recentBookmarks)
      })
    } else {
      setBookmarks(mockup)
    }
  }, [])

  if (!bookmarks?.length) {
    return null
  }

  return (
    <WidgetWrap
      title="Последние добавленные"
      Icon={StarIcon}
    >
      <List
        className={s.container}
        disablePadding
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        {bookmarks.map((bookmark) => {
          const siteUrl = bookmark.url?.match(regex)?.[0]
          return (
            <ListItem
              key={bookmark.id}
              className={s.bookmark}
              disablePadding
              disableGutters
            >
              <a href={bookmark.url} target="_self">
                <ListItemButton>
                  <ListItemIcon className={s.bookmarkIcon}>
                    <img src={`${siteUrl}/favicon.ico`} alt="" />
                  </ListItemIcon>
                  <ListItemText
                    className={s.bookmarkText}
                    primary={bookmark.title}
                  />
                </ListItemButton>
              </a>
            </ListItem>
          )
        })}
      </List>
    </WidgetWrap>
  )
}

export default LastBookmarks

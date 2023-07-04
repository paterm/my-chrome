import React, { useEffect, useState } from 'react'
import WidgetWrap from '@components/widgets/WidgetWrap';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { last24history } from '@components/widgets/LastHistory/mock';
import { List, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material';
import s from '@components/widgets/BookmarksTree/BookmarksTree.module.scss';
import { getUrlFavicon } from '@utils/getUrlFavicon';
import { EWidgetID } from '@const/widgetName';
import HistoryItem = chrome.history.HistoryItem;


export const LastHistory = () => {
  const [lastHistory, setLastHistory] = useState<HistoryItem[]>(last24history);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log('chrome', chrome);
    if (chrome?.history) {
      chrome.history.search({text: ""}, (historyItems) => {
        const filtered = historyItems.reduce<HistoryItem[]>((acc, curr) => {
          if (!acc.find(({title}) => title === curr.title)) {
            acc.push(curr);
          }
          return acc;
        }, []);
        setLastHistory(filtered)
      });
    }
  }, [])

  return (
    <WidgetWrap
      title="History"
      Icon={AutoStoriesIcon}
      widgetID={EWidgetID.HISTORY}
    >
      <TextField value="search" />

      <List>
        {lastHistory.map((historyItem) => (
          <ListItemButton onClick={() => window.open(historyItem.url, '_blank')}>
            <ListItemIcon>
              <img className={s.favicon} src={getUrlFavicon(historyItem.url)} alt="favicon" />
            </ListItemIcon>
            <ListItemText>{historyItem.title}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </WidgetWrap>
  )
}

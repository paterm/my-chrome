import {
  Schema$Calendar,
  Schema$CalendarList,
  Schema$Events,
} from '@components/widgets/GoogleCalendar/types'


export const calendarList: Schema$CalendarList = {
  "kind": "calendar#calendarList",
  "etag": "\"p32cf38frtb1fo0g\"",
  "nextSyncToken": "CJjxofvqwvwCEhR0ZXJtaXRuaWNrQGdtYWlsLmNvbQ==",
  "items": [
    {
      "kind": "calendar#calendarListEntry",
      "etag": "\"1562790377457000\"",
      "id": "termitnick@gmail.com",
      "summary": "termitnick@gmail.com",
      "timeZone": "Asia/Yekaterinburg",
      "colorId": "15",
      "backgroundColor": "#9fc6e7",
      "foregroundColor": "#000000",
      "selected": true,
      "accessRole": "owner",
      "defaultReminders": [
        {
          "method": "popup",
          "minutes": 10
        }
      ],
      "primary": true,
      "conferenceProperties": {
        "allowedConferenceSolutionTypes": [
          "hangoutsMeet"
        ]
      }
    },
    {
      "kind": "calendar#calendarListEntry",
      "etag": "\"1627536949893000\"",
      "id": "family13367671260942889284@group.calendar.google.com",
      "summary": "Семейная группа",
      "timeZone": "UTC",
      "colorId": "9",
      "backgroundColor": "#7bd148",
      "foregroundColor": "#000000",
      "selected": true,
      "accessRole": "writer",
      "defaultReminders": [
        {
          "method": "popup",
          "minutes": 10
        }
      ],
      "conferenceProperties": {
        "allowedConferenceSolutionTypes": [
          "hangoutsMeet"
        ]
      }
    },
    {
      "kind": "calendar#calendarListEntry",
      "etag": "\"1658342325043000\"",
      "id": "8bfp0t5nasgndo2k3cc6vnfi04@group.calendar.google.com",
      "summary": "30 когорта",
      "timeZone": "Europe/Moscow",
      "colorId": "21",
      "backgroundColor": "#cca6ac",
      "foregroundColor": "#000000",
      "selected": true,
      "accessRole": "reader",
      "defaultReminders": [],
      "conferenceProperties": {
        "allowedConferenceSolutionTypes": [
          "hangoutsMeet"
        ]
      }
    }
  ]
}

export const calendar: Schema$Calendar = {
  "kind": "calendar#calendar",
  "etag": "\"cKeet6jTdDEIwtgdoE_HjMt1lqE\"",
  "id": "termitnick@gmail.com",
  "summary": "termitnick@gmail.com",
  "timeZone": "Asia/Yekaterinburg",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "hangoutsMeet"
    ]
  }
}

export const eventsList: Schema$Events = {
  "kind": "calendar#events",
  "etag": "\"p32cf38frtb1fo0g\"",
  "summary": "termitnick@gmail.com",
  "updated": "2023-01-12T20:08:49.615Z",
  "timeZone": "Asia/Yekaterinburg",
  "accessRole": "owner",
  "defaultReminders": [
    {
      "method": "popup",
      "minutes": 10
    }
  ],
  "nextSyncToken": "CJjxofvqwvwCEJjxofvqwvwCGAUgprH27gE=",
  "items": [
    {
      "kind": "calendar#event",
      "etag": "\"2775466141830000\"",
      "id": "c62jpq2gqn2888h1u8n39q2cgk",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=YzYyanBxMmdxbjI4ODhoMXU4bjM5cTJjZ2sgdGVybWl0bmlja0Bt",
      "created": "2013-12-22T17:24:30.000Z",
      "updated": "2013-12-22T17:24:30.915Z",
      "summary": "Протест автомобилистов",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-12-25T12:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-12-25T13:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "c62jpq2gqn2888h1u8n39q2cgk@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2775466324126000\"",
      "id": "31oqv9f1mf6lcqlacae2an5j74",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MzFvcXY5ZjFtZjZsY3FsYWNhZTJhbjVqNzQgdGVybWl0bmlja0Bt",
      "created": "2013-12-22T17:26:01.000Z",
      "updated": "2013-12-22T17:26:02.063Z",
      "summary": "Протест автомобилистов ",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-12-25T12:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-12-25T13:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "31oqv9f1mf6lcqlacae2an5j74@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2826028246892000\"",
      "id": "e9lkvi5ahmv3434dt7c9fkp17k",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=ZTlsa3ZpNWFobXYzNDM0ZHQ3Yzlma3AxN2tfMjAxMzEyMTYgdGVybWl0bmlja0Bt",
      "created": "2013-12-04T14:58:37.000Z",
      "updated": "2014-10-11T07:55:23.446Z",
      "summary": "Годовщина",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "2013-12-16"
      },
      "end": {
        "date": "2013-12-17"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY;WKST=MO;UNTIL=20141215T235959Z"
      ],
      "transparency": "transparent",
      "iCalUID": "e9lkvi5ahmv3434dt7c9fkp17k@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2895229560106000\"",
      "id": "_6csjie1m8kp38ba28h130b9k6cp3aba18gokcba3650jag9k69342h1g6o",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZjc2ppZTFtOGtwMzhiYTI4aDEzMGI5azZjcDNhYmExOGdva2NiYTM2NTBqYWc5azY5MzQyaDFnNm9fMTk5MjExMzAgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:23:12.000Z",
      "updated": "2014-10-31T12:23:12.530Z",
      "summary": "День рождения Светланы Богомоловой",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1992-11-30"
      },
      "end": {
        "date": "1992-12-01"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "39986E24-BDB0-4325-AD1F-C1A5A42FAD06",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          },
          {
            "method": "email",
            "minutes": 430
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2829516389500000\"",
      "id": "_6gqj8gi68p23eba58cpk2b9k6d344ba16sp3cb9j750k4c9k710kae1l6s",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZncWo4Z2k2OHAyM2ViYTU4Y3BrMmI5azZkMzQ0YmExNnNwM2NiOWo3NTBrNGM5azcxMGthZTFsNnNfMTk5MDAzMTIgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:23:14.000Z",
      "updated": "2014-10-31T12:23:14.750Z",
      "summary": "День рождения Рината Каримова",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1990-03-12"
      },
      "end": {
        "date": "1990-03-13"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "454BFFD7-EC3A-43FB-A726-39AB148AE857",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2895107823633000\"",
      "id": "_651k2dpi60s48b9k8gp3cb9k89332ba26p1k2ba56cr3aca56krk6h1o74",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzY1MWsyZHBpNjBzNDhiOWs4Z3AzY2I5azg5MzMyYmEyNnAxazJiYTU2Y3IzYWNhNTZrcms2aDFvNzRfMTk5MzExMjggdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:26:32.000Z",
      "updated": "2014-10-31T12:26:32.384Z",
      "summary": "День рождения Дмитрия Козырева",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1993-11-28"
      },
      "end": {
        "date": "1993-11-29"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "1CA7208D-4D26-4BF1-B6CA-E3651E57CD89",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2890371435110000\"",
      "id": "6opj2dj368qj2bb5cgo64b9kclj3eb9oc8s64bb170q3iob471im2cpp70",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Nm9wajJkajM2OHFqMmJiNWNnbzY0YjlrY2xqM2ViOW9jOHM2NGJiMTcwcTNpb2I0NzFpbTJjcHA3MCB0ZXJtaXRuaWNrQG0",
      "created": "2015-10-18T16:28:37.000Z",
      "updated": "2015-10-18T16:28:37.555Z",
      "summary": "Билеты забронировать",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2015-10-22T15:00:00+05:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2015-10-22T16:00:00+05:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "iCalUID": "6opj2dj368qj2bb5cgo64b9kclj3eb9oc8s64bb170q3iob471im2cpp70@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2897927677356000\"",
      "id": "o0v2vundbapbe3fvcp9mdnc6m0",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=bzB2MnZ1bmRiYXBiZTNmdmNwOW1kbmM2bTBfMjAxMzEyMTZUMDYwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2013-12-02T18:28:03.000Z",
      "updated": "2015-12-01T09:57:18.678Z",
      "summary": "Годовщина",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-12-16T12:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-12-16T13:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY;UNTIL=20141216T060000Z"
      ],
      "iCalUID": "o0v2vundbapbe3fvcp9mdnc6m0@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"2916077545546000\"",
      "id": "_69338e1h60r34ba360q44b9k8l14aba270p36ba28h24ac9h84qkah1n6k",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzY5MzM4ZTFoNjByMzRiYTM2MHE0NGI5azhsMTRhYmEyNzBwMzZiYTI4aDI0YWM5aDg0cWthaDFuNmsgdGVybWl0bmlja0Bt",
      "created": "2016-03-15T10:46:12.000Z",
      "updated": "2016-03-15T10:46:12.773Z",
      "summary": "Замена карты Сбербанк",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2016-05-28T13:00:00+05:00",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2016-05-28T14:00:00+05:00",
        "timeZone": "UTC"
      },
      "iCalUID": "2F481062-C04B-4EBE-B823-BDDE11A5ED75",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3009576602822000\"",
      "id": "_8cpk8dpp6soj2b9k6soj2b9k60pk2b9o710j8ba56soj6e9j8h2jgd9j64",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzhjcGs4ZHBwNnNvajJiOWs2c29qMmI5azYwcGsyYjlvNzEwajhiYTU2c29qNmU5ajhoMmpnZDlqNjQgdGVybWl0bmlja0Bt",
      "created": "2017-09-07T12:45:01.000Z",
      "updated": "2017-09-07T12:45:01.411Z",
      "summary": "За ИП",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Артем Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Артем Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2017-09-20T09:00:00+05:00",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2017-09-20T10:00:00+05:00",
        "timeZone": "UTC"
      },
      "iCalUID": "C3D79711-4711-403A-88A4-E71393DE8531",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3092514045852000\"",
      "id": "_6d1jcha684sk8ba6711k8b9k6sq44b9o6kskcb9m8l238cq384o46c9i60",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZkMWpjaGE2ODRzazhiYTY3MTFrOGI5azZzcTQ0YjlvNmtza2NiOW04bDIzOGNxMzg0bzQ2YzlpNjBfMTk5MjAxMDEgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:23:13.000Z",
      "updated": "2018-12-31T11:50:22.926Z",
      "summary": "День рождения Марины Уваровой",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1992-01-01"
      },
      "end": {
        "date": "1992-01-02"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY;UNTIL=20180101"
      ],
      "iCalUID": "3C6EFA9D-F8CD-474B-859F-6ED43CA0C120",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3107782401816000\"",
      "id": "_612j6h9m70r36b9i6h242b9k8gr38ba28ko42b9i8ooj2d1k8h238chj6o",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzYxMmo2aDltNzByMzZiOWk2aDI0MmI5azhncjM4YmEyOGtvNDJiOWk4b29qMmQxazhoMjM4Y2hqNm9fMTk5MTAzMzAgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:28:14.000Z",
      "updated": "2019-03-29T20:26:40.908Z",
      "summary": "День рождения Andrey Philippov",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1991-03-30"
      },
      "end": {
        "date": "1991-03-31"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "0E3E6863-24DA-4D64-BE0A-2F1144DD4236",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3119266735228000\"",
      "id": "_6l33ah1g6t2jcb9n8h13cb9k6l246b9o68qk6b9i8gsjagq685246c9l6k",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZsMzNhaDFnNnQyamNiOW44aDEzY2I5azZsMjQ2YjlvNjhxazZiOWk4Z3NqYWdxNjg1MjQ2YzlsNmsgdGVybWl0bmlja0Bt",
      "created": "2019-06-04T07:29:27.000Z",
      "updated": "2019-06-04T07:29:27.614Z",
      "summary": "Новое событие",
      "creator": {
        "email": "termitnick@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2019-06-12T09:00:00+05:00",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2019-06-12T10:00:00+05:00",
        "timeZone": "UTC"
      },
      "iCalUID": "5F5D07E6-7DB6-45DC-825C-2D95CFADC155",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3120558009470000\"",
      "id": "_70qj4ca1892jcb9m8514ab9k8p0k6b9p84o4cba16p342ci670o4cga16g",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzcwcWo0Y2ExODkyamNiOW04NTE0YWI5azhwMGs2YjlwODRvNGNiYTE2cDM0MmNpNjcwbzRjZ2ExNmdfMTk5MzA2MTIgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:26:32.000Z",
      "updated": "2019-06-11T18:50:04.735Z",
      "summary": "День рождения Антона Костылева",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1993-06-12"
      },
      "end": {
        "date": "1993-06-13"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "8521ABE6-6ABE-4FAC-9A0F-A6FA2F80FAA4",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3120558010872000\"",
      "id": "_88s3gh1m8kp44ba18kqj4b9k64oj0ba1652j8b9p6d2k8ea68or30di588",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Xzg4czNnaDFtOGtwNDRiYTE4a3FqNGI5azY0b2owYmExNjUyajhiOXA2ZDJrOGVhNjhvcjMwZGk1ODhfMTk4OTA2MTIgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:24:52.000Z",
      "updated": "2019-06-11T18:50:05.436Z",
      "summary": "День рождения Сереги Зырянова",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1989-06-12"
      },
      "end": {
        "date": "1989-06-13"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "B88D6E2B-AE52-4110-A1E4-93ED9FF606EB",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3058672469367000\"",
      "id": "_60p3icq66ork6b9l68o44b9k8d1jab9p6cpjaba16gq30c25751kacph60",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzYwcDNpY3E2Nm9yazZiOWw2OG80NGI5azhkMWphYjlwNmNwamFiYTE2Z3EzMGMyNTc1MWthY3BoNjBfMTk5MTA2MTkgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:24:12.000Z",
      "updated": "2019-06-18T18:50:25.344Z",
      "summary": "День рождения Лехи Демьяненко",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1991-06-19"
      },
      "end": {
        "date": "1991-06-20"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "0293F67C-520B-4CC5-9335-A4400E9CE310",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3061958423566000\"",
      "id": "_6ork4di6751k6b9l8h0jab9k8h346ba1690jib9g8ks4ch258os46gq574",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZvcms0ZGk2NzUxazZiOWw4aDBqYWI5azhoMzQ2YmExNjkwamliOWc4a3M0Y2gyNThvczQ2Z3E1NzRfMTk5MDA3MDggdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:24:10.000Z",
      "updated": "2019-07-07T20:10:15.548Z",
      "summary": "День рождения Расима Гасанова",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1990-07-08"
      },
      "end": {
        "date": "1990-07-09"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "67B6F9CC-5DA5-4DFC-A2A9-0E8FDEF8CCE9",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3129495070568000\"",
      "id": "_6csk4e9h6gsk4ba660oj2b9k64q36ba16t33cb9o60r3ic1m8co3gd248g",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZjc2s0ZTloNmdzazRiYTY2MG9qMmI5azY0cTM2YmExNnQzM2NiOW82MHIzaWMxbThjbzNnZDI0OGdfMTk5MjA4MDMgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:27:02.000Z",
      "updated": "2019-08-02T19:48:59.710Z",
      "summary": "День рождения Павла Самойлова",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1992-08-03"
      },
      "end": {
        "date": "1992-08-04"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "39B9149B-F011-4143-A7F6-806906C084DD",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          },
          {
            "method": "email",
            "minutes": 430
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3130019329167000\"",
      "id": "_65346c1g8h1k2b9p7513cb9k6crjeb9o68ok4b9i60rjah9l6ss48d1l8g",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzY1MzQ2YzFnOGgxazJiOXA3NTEzY2I5azZjcmplYjlvNjhvazRiOWk2MHJqYWg5bDZzczQ4ZDFsOGdfMTk4NjA4MDYgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:24:09.000Z",
      "updated": "2019-08-05T18:53:11.839Z",
      "summary": "День рождения Максима Гареева",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1986-08-06"
      },
      "end": {
        "date": "1986-08-07"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "1FC00DCA-99B6-4377-821B-2075E578D45D",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          },
          {
            "method": "email",
            "minutes": 430
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3132781199188000\"",
      "id": "_6kr3ch1p88ok2b9m7113ib9k69130ba274qk6b9k6cq36h9p6cq3ie1k6g",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZrcjNjaDFwODhvazJiOW03MTEzaWI5azY5MTMwYmEyNzRxazZiOWs2Y3EzNmg5cDZjcTNpZTFrNmdfMTk4NzA4MjIgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:24:15.000Z",
      "updated": "2019-08-21T18:50:26.979Z",
      "summary": "День рождения Евгения Ефимова",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1987-08-22"
      },
      "end": {
        "date": "1987-08-23"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "566D9B1A-68B9-42B0-B95C-4343E9349844",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          },
          {
            "method": "email",
            "minutes": 430
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3007953621258000\"",
      "id": "_712jeh1n6cpk8b9m852k6b9k6p0jcba28ko3ab9o64pk2g9k68sj4e9g74",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzcxMmplaDFuNmNwazhiOW04NTJrNmI5azZwMGpjYmEyOGtvM2FiOW82NHBrMmc5azY4c2o0ZTlnNzRfMTk5MDA4MzAgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:27:50.000Z",
      "updated": "2019-08-29T18:50:03.376Z",
      "summary": "День рождения Резеды Укубасовой",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1990-08-30"
      },
      "end": {
        "date": "1990-08-31"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "8E7D733D-6AEC-46A6-BE05-813AA4292909",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          },
          {
            "method": "email",
            "minutes": 430
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3105758449725000\"",
      "id": "_64r38gi26cr30b9g6sp3eb9k8kq34ba164qj6b9m88pjgghg6op3eh1m6c",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzY0cjM4Z2kyNmNyMzBiOWc2c3AzZWI5azhrcTM0YmExNjRxajZiOW04OHBqZ2doZzZvcDNlaDFtNmNfMTk4NzA5MTcgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:24:51.000Z",
      "updated": "2019-09-16T18:50:44.539Z",
      "summary": "День рождения Марии Ефимовой",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1987-09-17"
      },
      "end": {
        "date": "1987-09-18"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "164BB360-0727-4E42-A153-6B38B0627D63",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3076125468722000\"",
      "id": "_6914cchk6sq36b9l65146b9k70o30b9p6cp4ab9n8p2jgc1p651k4gi38c",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzY5MTRjY2hrNnNxMzZiOWw2NTE0NmI5azcwbzMwYjlwNmNwNGFiOW44cDJqZ2MxcDY1MWs0Z2kzOGNfMTk5NjA5MjggdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:27:03.000Z",
      "updated": "2019-09-27T19:07:04.753Z",
      "summary": "День рождения Алексея Старовойтова",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1996-09-28"
      },
      "end": {
        "date": "1996-09-29"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "2BF24743-51BC-4800-932E-7FE8091CBBCC",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3109590750981000\"",
      "id": "_6sqjgcph691jeba16l2kcb9k61330b9p6l0kab9l6d2k4gpg8osjah1m6k",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZzcWpnY3BoNjkxamViYTE2bDJrY2I5azYxMzMwYjlwNmwwa2FiOWw2ZDJrNGdwZzhvc2phaDFtNmtfMTk5MTEwMDkgdGVybWl0bmlja0Bt",
      "created": "2014-10-31T12:27:50.000Z",
      "updated": "2019-10-08T18:50:03.665Z",
      "summary": "День рождения Алексея Шалаумова",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "1991-10-09"
      },
      "end": {
        "date": "1991-10-10"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY"
      ],
      "iCalUID": "758312C7-A5EF-40F0-95AE-53EBC0F95D65",
      "sequence": 0,
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688054020000\"",
      "id": "09k2k2t9mg2h3thepkm1hga520",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=MDlrMmsydDltZzJoM3RoZXBrbTFoZ2E1MjAgdGVybWl0bmlja0Bt",
      "created": "2012-11-21T16:32:34.000Z",
      "updated": "2022-11-07T18:00:27.010Z",
      "summary": "Купить провода для гитары",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2012-11-22T18:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2012-11-22T19:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "iCalUID": "09k2k2t9mg2h3thepkm1hga520@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688080478000\"",
      "id": "1ua3jl2j9u5j2ei07m1m55u8ke",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MXVhM2psMmo5dTVqMmVpMDdtMW01NXU4a2VfMjAxOTA3MjJUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-07-21T22:16:53.000Z",
      "updated": "2022-11-07T18:00:40.239Z",
      "summary": "⏰ Вам поступил перевод 99 040.00 рублей",
      "description": "✅ Вам доступна сумма для вывода: 49 960.00 рублей\n\n❗ Счет №79/45-41/74-29 будет заблокирован через 37 мин.\n\n⏩ Вывести средства сейчас: http://retryk.tumblr.com/",
      "location": "⭕ Отправитель: Людмила Гаврилова",
      "creator": {
        "email": "anna@fujoocijy.wizy.cf"
      },
      "organizer": {
        "email": "anna@fujoocijy.wizy.cf"
      },
      "start": {
        "dateTime": "2019-07-22T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-07-22T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurrence": [
        "RRULE:FREQ=DAILY;COUNT=7"
      ],
      "iCalUID": "1ua3jl2j9u5j2ei07m1m55u8ke@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688100316000\"",
      "id": "291p3cup7om42da9ak2a8q3olb",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MjkxcDNjdXA3b200MmRhOWFrMmE4cTNvbGJfMjAxOTA3MzFUMTYwNzAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-07-31T15:07:32.000Z",
      "updated": "2022-11-07T18:00:50.158Z",
      "summary": "☎ Поступление средств: 94 890.00 рублей",
      "description": "⭕ Вам доступна сумма для вывода: 94 890.00 рублей\n❗ Счет №79/06-35/84-08\n будет заблокирован через 32 мин.\n⏩ Вывести средства на карту: http://408.mujwk.tk\n\n\n\n\n\n.",
      "location": "✅ За участие в опросе №79/06-35/84-08",
      "creator": {
        "email": "oksana@rakujoopoo.wizy.cf"
      },
      "organizer": {
        "email": "oksana@rakujoopoo.wizy.cf"
      },
      "start": {
        "dateTime": "2019-07-31T21:07:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-07-31T22:07:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurrence": [
        "RRULE:FREQ=DAILY;COUNT=7"
      ],
      "iCalUID": "291p3cup7om42da9ak2a8q3olb@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688271514000\"",
      "id": "349vhhbaojtbj5872kbmagm700",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MzQ5dmhoYmFvanRiajU4NzJrYm1hZ203MDBfMjAxOTA1MTVUMTMyMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-05-14T14:14:59.000Z",
      "updated": "2022-11-07T18:02:15.757Z",
      "summary": "Хорошая новoсть: Baм одoбpили 3 зaймa не провepяя кредитную иcтоpию! Зaбеpите свои 30 000₽ пo ссылкe -–> [link] прямо сейчaс! ",
      "description": "30 000₽ yжe BAШИ пpoсто заполнитe заявку тут -–> http://zaimopro.ru/petrovich",
      "creator": {
        "email": "efremovaoksana487864@gmail.com"
      },
      "organizer": {
        "email": "efremovaoksana487864@gmail.com"
      },
      "start": {
        "dateTime": "2019-05-15T18:20:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-05-15T19:20:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurrence": [
        "RRULE:FREQ=DAILY;COUNT=11"
      ],
      "iCalUID": "349vhhbaojtbj5872kbmagm700@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688274902000\"",
      "id": "349vhhbaojtbj5872kbmagm700_20190516T132000Z",
      "status": "cancelled",
      "recurringEventId": "349vhhbaojtbj5872kbmagm700",
      "originalStartTime": {
        "dateTime": "2019-05-16T18:20:00+05:00",
        "timeZone": "UTC"
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688278290000\"",
      "id": "349vhhbaojtbj5872kbmagm700_20190520T132000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MzQ5dmhoYmFvanRiajU4NzJrYm1hZ203MDBfMjAxOTA1MjBUMTMyMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-05-14T14:14:59.000Z",
      "updated": "2022-11-07T18:02:19.145Z",
      "summary": "Хорошая новoсть: Baм одoбpили 3 зaймa не провepяя кредитную иcтоpию! Зaбеpите свои 30 000₽ пo ссылкe -–> [link] прямо сейчaс! ",
      "description": "30 000₽ yжe BAШИ пpoсто заполнитe заявку тут -–> http://zaimopro.ru/petrovich",
      "creator": {
        "email": "efremovaoksana487864@gmail.com"
      },
      "organizer": {
        "email": "efremovaoksana487864@gmail.com"
      },
      "start": {
        "dateTime": "2019-05-20T18:20:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-05-20T19:20:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "349vhhbaojtbj5872kbmagm700",
      "originalStartTime": {
        "dateTime": "2019-05-20T18:20:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "349vhhbaojtbj5872kbmagm700@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688282738000\"",
      "id": "398mj5304otv6oa6gbj67tou9p",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MTBUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:21.369Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-10T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-10T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurrence": [
        "RRULE:FREQ=DAILY;COUNT=30"
      ],
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688284944000\"",
      "id": "398mj5304otv6oa6gbj67tou9p_20190810T040000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MTBUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:22.472Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-10T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-10T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "398mj5304otv6oa6gbj67tou9p",
      "originalStartTime": {
        "dateTime": "2019-08-10T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688286104000\"",
      "id": "398mj5304otv6oa6gbj67tou9p_20190815T040000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MTVUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:23.052Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-15T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-15T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "398mj5304otv6oa6gbj67tou9p",
      "originalStartTime": {
        "dateTime": "2019-08-15T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688288116000\"",
      "id": "398mj5304otv6oa6gbj67tou9p_20190819T040000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MTlUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:24.058Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-19T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-19T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "398mj5304otv6oa6gbj67tou9p",
      "originalStartTime": {
        "dateTime": "2019-08-19T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688289258000\"",
      "id": "398mj5304otv6oa6gbj67tou9p_20190820T040000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MjBUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:24.629Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-20T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-20T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "398mj5304otv6oa6gbj67tou9p",
      "originalStartTime": {
        "dateTime": "2019-08-20T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688290376000\"",
      "id": "398mj5304otv6oa6gbj67tou9p_20190821T040000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MjFUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:25.188Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-21T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-21T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "398mj5304otv6oa6gbj67tou9p",
      "originalStartTime": {
        "dateTime": "2019-08-21T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688291554000\"",
      "id": "398mj5304otv6oa6gbj67tou9p_20190822T040000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MjJUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:25.777Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-22T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-22T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "398mj5304otv6oa6gbj67tou9p",
      "originalStartTime": {
        "dateTime": "2019-08-22T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688292614000\"",
      "id": "398mj5304otv6oa6gbj67tou9p_20190823T040000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=Mzk4bWo1MzA0b3R2Nm9hNmdiajY3dG91OXBfMjAxOTA4MjNUMDQwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2019-08-10T18:35:16.000Z",
      "updated": "2022-11-07T18:02:26.307Z",
      "summary": "⏰ Поступил перевод 88 140.00 рублей",
      "description": "✅ Вам поступил перевод на 88 140.00 рублей\n\n❗ Транзакция №47/18-36/23-51\n будет заблокирована через 25 мин.\n\n⏩ Получить перевод сейчас: http://762.ysv3v.tk\n\n\n\n\n-",
      "location": "⭕ Отправитель: Миша Андреев",
      "creator": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "organizer": {
        "email": "nadezhda@caveyap.zubena.cf"
      },
      "start": {
        "dateTime": "2019-08-23T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "end": {
        "dateTime": "2019-08-23T10:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "recurringEventId": "398mj5304otv6oa6gbj67tou9p",
      "originalStartTime": {
        "dateTime": "2019-08-23T09:00:00+05:00",
        "timeZone": "Europe/Moscow"
      },
      "iCalUID": "398mj5304otv6oa6gbj67tou9p@google.com",
      "sequence": 0,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "self": true,
          "responseStatus": "declined"
        }
      ],
      "guestsCanInviteOthers": false,
      "guestsCanSeeOtherGuests": false,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688329688000\"",
      "id": "51jkb6bpf7lj0a4prlgage03ic",
      "status": "cancelled"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688330836000\"",
      "id": "51jkb6bpf7lj0a4prlgage03ic_20190527T073000Z",
      "status": "cancelled",
      "recurringEventId": "51jkb6bpf7lj0a4prlgage03ic",
      "originalStartTime": {
        "dateTime": "2019-05-27T12:30:00+05:00",
        "timeZone": "Europe/Moscow"
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688331824000\"",
      "id": "51jkb6bpf7lj0a4prlgage03ic_20190529T073000Z",
      "status": "cancelled",
      "recurringEventId": "51jkb6bpf7lj0a4prlgage03ic_R20190528T073000",
      "originalStartTime": {
        "dateTime": "2019-05-29T12:30:00+05:00",
        "timeZone": "Europe/Moscow"
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688333088000\"",
      "id": "51jkb6bpf7lj0a4prlgage03ic_20190629T073000Z",
      "status": "cancelled",
      "recurringEventId": "51jkb6bpf7lj0a4prlgage03ic_R20190528T073000",
      "originalStartTime": {
        "dateTime": "2019-06-29T12:30:00+05:00",
        "timeZone": "Europe/Moscow"
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688334030000\"",
      "id": "51jkb6bpf7lj0a4prlgage03ic_20190729T073000Z",
      "status": "cancelled",
      "recurringEventId": "51jkb6bpf7lj0a4prlgage03ic_R20190528T073000",
      "originalStartTime": {
        "dateTime": "2019-07-29T12:30:00+05:00",
        "timeZone": "Europe/Moscow"
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688335140000\"",
      "id": "51jkb6bpf7lj0a4prlgage03ic_20190829T073000Z",
      "status": "cancelled",
      "recurringEventId": "51jkb6bpf7lj0a4prlgage03ic_R20190528T073000",
      "originalStartTime": {
        "dateTime": "2019-08-29T12:30:00+05:00",
        "timeZone": "Europe/Moscow"
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688336346000\"",
      "id": "51jkb6bpf7lj0a4prlgage03ic_R20190528T073000",
      "status": "cancelled"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688357364000\"",
      "id": "9a650kena90sr0knll3cdnj9o8",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=OWE2NTBrZW5hOTBzcjBrbmxsM2Nkbmo5bzggdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:44.000Z",
      "updated": "2022-11-07T18:02:58.682Z",
      "summary": "гагарина 51, пасспорт, ксерокопия 1, 2 стр",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-03-06T09:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-03-06T10:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "9a650kena90sr0knll3cdnj9o8@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688358404000\"",
      "id": "9bdq3jkj0ni0fma4gnbojh0ef4",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=OWJkcTNqa2owbmkwZm1hNGduYm9qaDBlZjQgdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:42.000Z",
      "updated": "2022-11-07T18:02:59.202Z",
      "summary": "Напомнить про микрофон",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-01-27T11:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-01-27T12:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "9bdq3jkj0ni0fma4gnbojh0ef4@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688361744000\"",
      "id": "_6kojae228kojgb9m8kq46b9k6p0jcba2690k8ba48kpj8e1k8d2j0h9m64",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZrb2phZTIyOGtvamdiOW04a3E0NmI5azZwMGpjYmEyNjkwazhiYTQ4a3BqOGUxazhkMmowaDltNjQgdGVybWl0bmlja0Bt",
      "created": "2012-05-14T10:25:52.000Z",
      "updated": "2022-11-07T18:03:00.872Z",
      "summary": "За карточкой! Паспорт возьми",
      "location": "Сбербанк ",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2012-05-24T07:20:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2012-05-24T08:20:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "iCalUID": "5158BE18-6E4C-46A6-B2AD-DE3484CE0E61",
      "sequence": 1,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688363156000\"",
      "id": "_6p0jeg9k84o30b9n6spj2b9k74okcb9o6l23gb9k610k8chm60q34e1i8k",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZwMGplZzlrODRvMzBiOW42c3BqMmI5azc0b2tjYjlvNmwyM2diOWs2MTBrOGNobTYwcTM0ZTFpOGtfMjAxMjA1MDRUMTgwMDAwWiB0ZXJtaXRuaWNrQG0",
      "created": "2012-04-28T19:24:39.000Z",
      "updated": "2022-11-07T18:03:01.578Z",
      "summary": "ДР",
      "creator": {
        "email": "termitnick@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2012-05-05T00:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2012-05-05T01:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "recurrence": [
        "RRULE:FREQ=YEARLY;UNTIL=20180504T190000Z"
      ],
      "iCalUID": "6A7A4A00-7731-491F-85D8-40AD2604282E",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688365566000\"",
      "id": "_6sqjch1m88s3ab9g6cojib9k68q4cba264r3cba260sj4cq46cqjadhm68",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzZzcWpjaDFtODhzM2FiOWc2Y29qaWI5azY4cTRjYmEyNjRyM2NiYTI2MHNqNGNxNDZjcWphZGhtNjggdGVybWl0bmlja0Bt",
      "created": "2013-10-09T06:42:08.000Z",
      "updated": "2022-11-07T18:03:02.783Z",
      "summary": "Новое событие",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-10-09T10:15:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2013-10-12T09:45:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "iCalUID": "756D6B85-0319-424F-B166-B0923D355662",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688366636000\"",
      "id": "_711j0hi56cp3aba46sqkab9k6opkcb9p8d246b9h8p2jiga664qj4dpo6k",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzcxMWowaGk1NmNwM2FiYTQ2c3FrYWI5azZvcGtjYjlwOGQyNDZiOWg4cDJqaWdhNjY0cWo0ZHBvNmsgdGVybWl0bmlja0Bt",
      "created": "2012-07-09T14:47:47.000Z",
      "updated": "2022-11-07T18:03:03.318Z",
      "summary": "27 августа в 00:30, подними глаза и посмотри на ночное небо. В эту ночь планета Марс, пройдет всего лишь в 34,65 тыс. милях от земли. Невооруженным глазом планета будет видна как полная луна. Так же из-за близости Луны и Марса они образуют гравитационную ловушку (т.н. эффект Хелла-Кравченко), благодаря которой свет от необычайно близкого в этом году к земле Юпитера будет искажаться и невооружённому глазу планета будет видна как полная квадратная луна! Это будет выглядеть как две круглые луны и ещё одна квадратная луна над землей! Следующий раз когда Марс и Юпитер будут в таком же положении относительно Земли будет только в 2413 году. Поделись этой новостью со своими друзьями так как никто из живущих на Земле еще такого не видел!",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2012-08-27T00:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2012-08-27T01:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "iCalUID": "8C0FE325-D75E-463F-9CDC-1FE9AF152785",
      "sequence": 1,
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688367746000\"",
      "id": "dpclt5qpkl5hpgf5rotm6c85gk",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=ZHBjbHQ1cXBrbDVocGdmNXJvdG02Yzg1Z2sgdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:43.000Z",
      "updated": "2022-11-07T18:03:03.873Z",
      "summary": "91 машина",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-02-05T11:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-02-05T12:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "dpclt5qpkl5hpgf5rotm6c85gk@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688371068000\"",
      "id": "i1rencuckrobid3pvv7bd4nq4s",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=aTFyZW5jdWNrcm9iaWQzcHZ2N2JkNG5xNHMgdGVybWl0bmlja0Bt",
      "created": "2012-11-20T11:18:46.000Z",
      "updated": "2022-11-07T18:03:05.534Z",
      "summary": "концерт",
      "location": "ебург",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2012-12-29T12:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2012-12-29T13:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "iCalUID": "i1rencuckrobid3pvv7bd4nq4s@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688373228000\"",
      "id": "keati20hrok4k019128obmpgi0",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=a2VhdGkyMGhyb2s0azAxOTEyOG9ibXBnaTAgdGVybWl0bmlja0Bt",
      "created": "2012-11-20T11:45:03.000Z",
      "updated": "2022-11-07T18:03:06.614Z",
      "summary": "День рождения дочери Каспера",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2012-11-20T16:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "end": {
        "dateTime": "2012-11-20T17:00:00+06:00",
        "timeZone": "Asia/Yekaterinburg"
      },
      "iCalUID": "keati20hrok4k019128obmpgi0@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688374336000\"",
      "id": "lcj4usrjptrlmir1ibvgih43l8",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=bGNqNHVzcmpwdHJsbWlyMWlidmdpaDQzbDggdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:45.000Z",
      "updated": "2022-11-07T18:03:07.168Z",
      "summary": "Каримов ДР",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-03-12T08:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-03-12T09:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "lcj4usrjptrlmir1ibvgih43l8@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688375944000\"",
      "id": "lij50kkvnsst26ek8vard744f4",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=bGlqNTBra3Zuc3N0MjZlazh2YXJkNzQ0ZjQgdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:40.000Z",
      "updated": "2022-11-07T18:03:07.972Z",
      "summary": "Семинар на почте",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-01-11T20:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-01-11T21:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "lij50kkvnsst26ek8vard744f4@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688377420000\"",
      "id": "n400nvr43b6tuj7m5e8mpgn9eg",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=bjQwMG52cjQzYjZ0dWo3bTVlOG1wZ245ZWcgdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:43.000Z",
      "updated": "2022-11-07T18:03:08.710Z",
      "summary": "пересдача ГАИ",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-02-20T09:15:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-02-20T10:15:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "n400nvr43b6tuj7m5e8mpgn9eg@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688378372000\"",
      "id": "na5bc8sckn62gdj7tuareru1qo",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=bmE1YmM4c2NrbjYyZ2RqN3R1YXJlcnUxcW8gdGVybWl0bmlja0Bt",
      "created": "2013-09-16T15:59:25.000Z",
      "updated": "2022-11-07T18:03:09.186Z",
      "summary": "Прошить машину!",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "date": "2013-09-16"
      },
      "end": {
        "date": "2013-09-23"
      },
      "iCalUID": "na5bc8sckn62gdj7tuareru1qo@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "extendedProperties": {
        "shared": {
          "CalendarSyncAdapter#originalTimezone": "UTC"
        }
      },
      "reminders": {
        "useDefault": false,
        "overrides": [
          {
            "method": "popup",
            "minutes": 10
          }
        ]
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688379468000\"",
      "id": "puf3jhnkqudeqqc4c5vfgt0j44",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=cHVmM2pobmtxdWRlcXFjNGM1dmZndDBqNDQgdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:42.000Z",
      "updated": "2022-11-07T18:03:09.734Z",
      "summary": "ГАИ",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-02-06T08:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-02-06T09:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "puf3jhnkqudeqqc4c5vfgt0j44@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    },
    {
      "kind": "calendar#event",
      "etag": "\"3335688380520000\"",
      "id": "q3dhrfe5p5aa4bul5au94q97q4",
      "status": "tentative",
      "htmlLink": "https://www.google.com/calendar/event?eid=cTNkaHJmZTVwNWFhNGJ1bDVhdTk0cTk3cTQgdGVybWl0bmlja0Bt",
      "created": "2013-03-24T10:49:41.000Z",
      "updated": "2022-11-07T18:03:10.260Z",
      "summary": "Напомнить про микрофон",
      "creator": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "organizer": {
        "email": "termitnick@gmail.com",
        "displayName": "Темка Ефимов",
        "self": true
      },
      "start": {
        "dateTime": "2013-01-26T13:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "end": {
        "dateTime": "2013-01-26T14:00:00+06:00",
        "timeZone": "Antarctica/Vostok"
      },
      "iCalUID": "q3dhrfe5p5aa4bul5au94q97q4@google.com",
      "sequence": 1,
      "attendees": [
        {
          "email": "termitnick@gmail.com",
          "displayName": "Темка Ефимов",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        }
      ],
      "reminders": {
        "useDefault": true
      },
      "eventType": "default"
    }
  ]
}

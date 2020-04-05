---
slug: peak-performance-pomodoro
title: Peak Performance Pomodoro
date: 2020/04/05
---
Today I realized I wanted a timer to prevent myself from going off task, to maximize focus and then take breaks. I remembered the pomodoro method, doing chunks of work, fully engaged with a timed interval and then taking a break for a few minutes after. It's very nice for being fully on at level 10, and then decompressing. No simmering 6's where we're going.

So I checked the Mac App Store, and found a few are out there I can buy, but I don't need all the advanced bells and whistles just a timer.

I heard Electron.js allows you to make make a web page so I then went that route. Looks promising... similar to react-native, ‘write once, run everywhere.’ Lightweight browser that also gives access to the file system. That’s a plus.

But we don’t need files, we just want a 25 minute timer for pomodoro. Keep it simple. Look up terminal commands…

I found 'osascript' for alerts as those are nice and built in... Try running display notification “hello world”.

Need to know osascript... Nope that doesn't work. Okay need to understand osascript.


```bash
$ man osascript
```

Okay so I can pass a command to be executed into osascript.
```bash
$osascript -e 'display notification "hello world!"'
```

Great we’ve got a notification. Now, how do I send it in the future?
mac has sleep command to sleep n seconds $ man sleep

Pomodoro is 25 minutes, so 25 * 60 = 1500 seconds.

Need ability to cancel it if I want to so add && between commands

Command is...
```bash
sleep 25m && osascript -e 'display notification “Pomodoro complete, quick break then back at it for 25 more! After 4 long break.”’
```

Reformat name to sleep 2s && osascript -e 'display notification "Pomodoro complete! Well done! Break. Then bring A-Game for 25 more!"

Then add sound name frog

Then add title

Then keep alert in case looking away by going to system preferences -> Notifications ->Script Editor -> click icon Alerts to add the dismiss icon

Add to bash_profile, escaping the double quotes
```bash
alias pomo="sleep 25m && osascript -e 'display notification "Well done! Take quality break. Then A-Game for 25 more!" with title 
```

"Pomodoro complete!" sound name "Frog"'"

Well done! Take a break, get some water and then bring that A Game

```bash
$ pomo
```

## 1. Github Stat Card
![](https://github-readme-stats.vercel.app/api?username=cx0y&count_private=true&theme=midnight-purple&hide_border=true) 

> how to add ?
```md
![](https://github-readme-stats.vercel.app/api?username=YourUserName)
```
***All Options***

-   `title_color` - Card's title color (hex color). Default: `2f80ed`.
-   `text_color` - Body text color (hex color). Default: `434d58`.
-   `icon_color` - Icons color if available (hex color). Default: `4c71f2`.
-   `border_color` - Card's border color (hex color). Default: e4e2e2 (Does not apply when `hide_border` is enabled).
-   `bg_color` - Card's background color (hex color) or a gradient in the form of angle,start,end. Default: `fffefe`
-   `hide_border` - Hides the card's border (boolean). Default: `false`
-   `theme` - name of the theme, choose from all available themes. Default: `default theme`.
-   `cache_seconds` - set the cache header manually (min: 7200, max: 86400). Default: `14400 seconds (4 hours)`.
-   `locale` - set the language in the card (e.g. cn, de, es, etc.). Default: `en`.
-   `border_radius` - Corner rounding on the card. Default: `4.5`.
-   `hide_title` - _(boolean)_. Default: `false`.
-   `card_width` - Set the card's width manually _(number)_. Default: `500px  (approx.)`.
-   `hide_rank` - _(boolean)_ hides the rank and automatically resizes the card width. Default: `false`.
-   `show_icons` - _(boolean)_. Default: `false`.
-   `include_all_commits` - Count total commits instead of just the current year commits _(boolean)_. Default: `false`.
-   `count_private` - Count private commits _(boolean)_. Default: `false`.
-   `line_height` - Sets the line height between text _(number)_. Default: `25`.
-   `exclude_repo` - Exclude stars from specified repositories _(Comma-separated values)_. Default: `[] (blank array)`.
-   `custom_title` - Sets a custom title for the card. Default:  `<username> GitHub Stats`.
-   `text_bold` - Use bold text _(boolean)_. Default: `true`.
-   `disable_animations` - Disables all animations in the card _(boolean)_. Default: `false`.
> how to use options?

here using `theme` & `hide_border` & `show_icons`
```md
![](https://github-readme-stats.vercel.app/api?username=YourUserName&theme=jolly&hide_border=true&show_icons=true)

```

[ [ALL THEMES](https://cx0y.github.io/readme-cards/pages/GithubStatCard.html) ]

---

## 2. Streak Stats Card

![](https://github-readme-streak-stats.herokuapp.com?user=cx0y&theme=midnight-purple&hide_border=true)

> How to add ?
```md
![](https://streak-stats.demolab.com/?user=YourUserName)
```
***All Options***

- `user` - GitHub username to show stats for (like `cx0y`)
- `theme` - The theme to apply (Default: `default`)	`dark`, `radical`, etc.
- `hide_border` - Make the border transparent (Default: `false`)
- `border_radius` - Set the roundness of the edges (Default: `4.5`)	
- `background` - Background color	(hex code without `#` or css color)
- `border`- Border color (hex code without `#` or css color)
- `stroke` - Stroke line color between sections	(hex code without `#` or css color)
- `ring` - Color of the ring around the current streak (hex code without `#` or css color)
- `fire` - Color of the fire in the ring (hex code without `#` or css color)
- `currStreakNum` - Current streak number (hex code without `#` or css color)
- `sideNums` - Total and longest streak (hex code without `#` or css color)
- `currStreakLabel` -	Current streak label (hex code without `#` or css color)
- `sideLabels` - Total and longest streak labels (hex code without `#` or css color)
- `dates` - Date range text color (hex code without `#` or css color)
- `locale` - Locale to use for labels (Default: `en`)	
- `type` - Output format (Default: `svg`)	Current options: `svg`, `png` or `json`

> how to use options?

Here using `theme` & `hide_border`

```md
![](https://github-readme-streak-stats.herokuapp.com?user=YourUserName&theme=midnight-purple&hide_border=true)
```

[ [ALL THEMES](https://cx0y.github.io/readme-cards/pages/StreakStatsCard.html) ]


---
## 3. Activity Graph Card

![](https://activity-graph.herokuapp.com/graph?username=cx0y&theme=react-dark&hide_border=true&bg_color=000&line=33006F&color=808080&custom_title=cx0y&point=33006F7F)

> How to add ?
```md
![](https://activity-graph.herokuapp.com/graph?username=YourUserName)
```
***All Options***

- `bg_color` - card's background color (hex code without `#`)
- `color` - graph card's text color	(hex code without `#`)
- `title_color` - graph card's title color (hex code without `#`)
- `line` - graph's line color (hex code without `#`)
- `point` - color of points on line graph (hex code without `#`)
- `area_color` - color of the area under the graph (hex code without `#`)
- `area` - shows area under the graph	boolean (default: `false`)
- `hide_border` - makes the border of the graph transparent	boolean (default: `false`)
- `hide_title` - sets the title to an empty string	boolean (default: `false`)
- `custom_title` - set the title to any string (please make sure that you are using `%20` for spaces)
- `theme` - name of available themes 
- `radius` - border radius of graph	number `(0-16 inclusive)`

> how to use options?

Here using `theme` & `hide_border` & `bg_color` & `line` & `color` & `custom_title` & `point`
```md
![](https://activity-graph.herokuapp.com/graph?username=YourUserName&theme=react-dark&hide_border=true&bg_color=000&line=33006F&color=808080&custom_title=cx0y&point=33006F7F)
```

[ [ALL THEMES](https://cx0y.github.io/readme-cards/pages/ActivityGraphCard.html) ]


---

## 4. GitHub Profile Summary Stats Card
![](https://kasroudra-stats-card.herokuapp.com/svg?user=cx0y&theme=dark)

> How to use?

```md
![](https://kasroudra-stats-card.herokuapp.com/svg?user=YourUserName)
```

***All Options***

- theme - default: `light` and another `dark`

> how to use options?

```
![](https://kasroudra-stats-card.herokuapp.com/svg?user=YourUserName&theme=dark)
```
---
## 5. GitHub Profile Summary Stats Card (#2)
![](https://awesome-github-stats.azurewebsites.net/user-stats/cx0y?theme=midnight-purple&border=000000&cardType=octocat)

> How to use?

```md
![](https://awesome-github-stats.azurewebsites.net/user-stats/YourUserName)
```

***All Options***

- `theme` - The theme to apply (Default: `default`)
- `show_icons` - Dont shown icons at left of labels (Default: `true`)
- `background` - Background color	(hex code without `#` or css color)
- `border` - Border color (hex code without `#` or css color)
- `text` - Color of the text (hex code without `#` or css color)
- `title` - Color of the title at top (hex code without `#` or css color)
- `icon` - Color of the icons (hex code without `#` or css color)
- `ring` - Color of the ring around the level (hex code without `#` or css color)
- `cardType` - Type of Card (Default: `level`)

> how to use options?

Here using `theme` & `border` & `cardType`

```md
![](https://awesome-github-stats.azurewebsites.net/user-stats/YourUserName?theme=midnight-purple&border=000000&cardType=octocat)
```

---
## 6. Github Profile Trophy
![](https://github-profile-trophy.vercel.app/?username=cx0y&theme=nord&no-bg=true&column=3&margin-w=15&margin-h=15)

> How to add ?
```md
![](https://github-profile-trophy.vercel.app/?username=YourUserName)
```
***All Options***

- `theme` - Theme to apply (Default: `flat`)
- `column` -  specify the maximum column size (Default: `column=6`)
- `row` - specify the maximum row size (Default: `row=3`)
- `no-bg` - hide bg (Default: `no-bg=false`)
- `no-frame` - hide frame (Default: `no-frame=false`)

> how to use options?

Here using `theme` & `no-bg` & `column`
```md
![](https://github-profile-trophy.vercel.app/?username=YourUserName&theme=nord&no-bg=true&column=3)

```

[ [ALL THEMES](https://cx0y.github.io/readme-cards/pages/GithubPofileTrophy.html) ]


---
## 7. Readme Jokes Card
![](https://readme-jokes.vercel.app/api?hideBorder&theme=solidBlue)

> How to add ?

```md
![](https://readme-jokes.vercel.app/api)
```

***All Options***

- `bgColor` - Background Color
- `borderColor` - Border Color
- `qColor` - Question Color
- `aColor` - Answer Color
- `textColor` - Normal text Color
- `codeColor` - Code Color
- `hideBorder` - Mention as a value-less parameter to hide boder
- `theme` - Theme

> how to use options?

Here using `hideBorder` & `theme` & `qColor` & `aColor`
```
![](https://readme-jokes.vercel.app/api?hideBorder&theme=cobalt&qColor=%23944bcc&aColor=%23bbdb51)
```

[ [ALL THEMES](https://cx0y.github.io/readme-cards/pages/ReadmeJokesCard.html) ]


---
## 8. Typing Svg Card

![](https://readme-typing-svg.demolab.com/?lines=First+line+of+text;Second+line+of+text&color=ffffff)

> How to Add?
```md
![](https://readme-typing-svg.demolab.com/?lines=First+line+of+text;Second+line+of+text)
```

***All Options***

- `lines` - Text to display with lines separated by ; and + for spaces
- `height` - Height of the output SVG in pixels (default: `50`)
- `width` - Width of the output SVG in pixels (default:`400`)
- `size` - Font size in pixels (default: `20`)
- `font` - Font family, Any font from Google Fonts(default: `monospace`)	
- `color` - Color of the text (default: `36BCF7`)	Hex code without `#` (eg. `F724A9`)
- `background` - Background color of the text (default: `00000000`) Hex code without `#` (eg. `FEFF4C`)
- `center` - true to center text or false for left aligned (default: `false`)
- `vCenter` - `true` to center vertically or  false`(default) to align above the center
- `multiline`	- `true` to wrap lines or `false` to retype on one line (default: `false`)
- `duration` - Duration of the printing of a single line in milliseconds (default: `5000`)
- `pause` - Duration of the pause between lines in milliseconds (default:`0`)

> how to use options?

Here using `lines` & `color`
```md
![](https://readme-typing-svg.demolab.com/?=First+line+of+text;Second+line+of+text&color=FEFF4C)
```
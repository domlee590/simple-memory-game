# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Dominic Lee**

Time spent: **12** hours spent in total

Link to project: https://glitch.com/edit/#!/pre-work

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial (**deactivated for audio files**)
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Buttons are not active (clickable) when the pattern is being shown
- [x] Buttons light up when hovered over by mouse cursor
- [x] Score counter (goes up 1 when game won, down 1 when game lost)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

_Note that the paterns in the videos are different, as they are random. The buttons change appearance during pattern play as they are deactivated. They also change appearance when being hovered over._

**Mistake + Score Counters**

![](https://i.imgur.com/EMRJ5bt.gif)

**Play Speeds Up Each Turn + Winning Game**

![](https://i.imgur.com/DbM9Tr5.gif)

**Timer Runs Out**

![](https://i.imgur.com/GMk6II3.gif)

**Starting/Stopping Game Resets Counters (not Score)**

![](https://i.imgur.com/sZEL0X9.gif)

## Reflection Questions

1. **If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.**

   I did not use many outside resources besides reading articles on W3 Schools, where I learned how to implement some of the optional features and even those of my own.

2. **What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**

   A major challenge I encountered while programming this game was fixing some edge cases with the timer and with handling player guesses. The timer proved to be very tricky, as I found that my original implementation would create multiple simultaneous timers, which made the game non-functional. The way I handled this issue is by studying the playTone() function from the basic code to see how it interacted with the playClueSequence() function and the delay variable, as well as reading up on the set and clearInterval() functions. As for player guesses, I noticed that there were some non-intended consequences if the player was to make a guess while clues were playing. I realized that disabling the buttons during the clue revealing process not only ensured that the user wold have no issue knowing when to make guesses, but also prevented the unintended program behavior.

   Another challenge that I encountered was that of incorporating image backgrounds into the pressed button style. My original solution was to simply use "background-image: url(...)" in CSS to style the active and lit buttons, but the instructions specified to study the <img> tag in HTML and suggested to implement the backgrounds using such elements. To implement the backgrounds in this fashion, I decided to not style active buttons but rather use the lightButton() function on button press, not only when revealing clues. This way, I could hide and unhide the images which I had embedded into the buttons using the same function for both user clicks and automatic clue reveal.

3. **What questions about web development do you have after completing your submission? (recommended 100 - 300 words)**

   I learned a great deal about web development through creating this game, and the process has made me increasingly curious as to how certain functionality can be implemented into web apps. One idea I had, and am curious about, is that of a global high score, which would keep track of the highest score any visitor to the site achieved while playing the game. Doing this would require storing and editing some high score variable/value that displays and can be updated on every instance of the web app, and I am curious how this could be achieved. Additionally, I often wonder how much of the HTML creation process is done manually in the modern era, as I feel that many companies use visual webpage creation tools or Python to generate webpages. I am very curious about the automation of this process and would like to learn more about it in the future.

4. **If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)**

   I found creating this game and adding the extra features to be very fun. If I had a bit more time, I would like to add more game modes to the website, as I feel it would be easy to implement a "whack a mole"-type game, or perhaps a game where the screen displays a color or image and the user is to click the corresponding button(s) quickly, with increasing difficulty (length or complexity of instruction) and time limits. I would like to learn how to incorporate the global high score as I mentioned above, as well as allowing the user to upload their own media, such as audio, and assign them to the buttons. This would allow the game to be used in new ways, such as acting as a soundboard. I might also want to restructure the score functionality to include multipliers for successive game wins and punishments for mistakes (which I presume would not be too hard).

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/63e3588852e1462da38d113ed5f57c10)

## License

    Copyright Dominic Lee

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

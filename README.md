# Project Name

> StopWatch.

## Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)

## General info

The purpose of the proyect is to use JavaScript classes to build an accurate stopwatch.

## Technologies

- vanilla JavaScript

## Setup

[Contact](https://carloshernandez2.github.io/stopWatch/)

## Code Examples

Example of usage:

```javascript
    // sets an interval to update the stopwatch as fast as it can asynchronously
    start(clock) {
        if (StopWatch.dontStartTwice === 0){
            this._interval = setInterval(this.loop, 0, clock);
        }
        StopWatch.dontStartTwice = 1;
    }
```

## Features

List of features:

- Accuracy (using the Date object).

## Status

Project is: Finished.

## Inspiration

I was motivated by the challenge it meant to me!.

## Contact

Created by [@CarlosHernández](https://linkedin.com/in/carlos-manuel-hernández-consuegra-42975a189) - feel free to contact me!

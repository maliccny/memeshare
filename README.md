# Meme Share <!-- omit in toc -->



- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

MemeShare is an app which lets you share memes and jokes with friends and allows you to discuss memes with people by leaving comments and feedback on their posts. 


<br>

## MVP


<br>

### Goals

- _Allow user to make an account, sign in_
- _Allow User to make posts and comments_
- _Utilize CRUD functionality on Posts and Comments_

<br>

### Libraries and Dependencies



|     Library      | Description                                    |
| :--------------: | :---------------------------------------------------------------------- |
|      React       | _JavaScript library for building user interfaces or UI component_     |
|   React Router   | _A tool that allows you to handle routes in a web app, using dynamic routing_     |
|   Ruby on Rails  | _A model–view–controller framework, written in Ruby_     |   
|  rack-cors gem   | _handling Cross-Origin Resource Sharing (CORS)_|

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

>https://i.imgur.com/vehPqU4.png

#### Component Hierarchy



``` structure

src
|__ components/
      |__ Login.jsx
      |__ Register.jsx
      |__ ShowPosts.jsx
      |__ PostDetail.jsx
      |__ UpdatePost.jsx
      |__ Main.jsx
      |__ UpdateComment.jsx
      |__ Header.jsx
      |__ Footer.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ posts.js
      |__ comments.js

```

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

> https://i.imgur.com/grYM90A.png

<br>

***

## Post-MVP

> Adding comment replies to comments
> more intricate css

***

## Code Showcase

> Fill in Later

## Code Issues & Resolutions

> Fill in Later

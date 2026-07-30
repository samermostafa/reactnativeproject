# To Do List App

A simple task management mobile application developed using React Native.

The application allows users to create an account, log in, manage their personal tasks, edit their profile, and view their task information using Firebase Authentication and Cloud Firestore.

##  Project Demo

Watch the project demonstration video:

[ Watch Demo Video](https://drive.google.com/file/d/1iK-Us95kV_E7L4GVaAJrBi1UqaqcgBR_/view?usp=sharing)

## Features

- User Registration
- User Login and Logout
- Firebase Authentication
- Create Tasks
- View Tasks
- Edit Tasks
- Delete Tasks
- Real-time Task Updates
- User Profile
- Edit User Name
- Display Total Number of Tasks
- Task Details Screen
- About App and Developer Screen
- Multiple Navigation Types
- Custom App Icon
- Custom Inter Font

## Technologies Used

- React Native CLI
- JavaScript
- React Navigation
- Firebase Authentication
- Cloud Firestore
- React Native Firebase

## Navigation

The application uses multiple navigation types:

- Stack Navigation
- Bottom Tab Navigation
- Drawer Navigation

Stack Navigation is used to move between screens such as Login, Register, and Task Details.

Bottom Tab Navigation provides quick access to the main application screens.

Drawer Navigation provides additional navigation options such as Profile and About.

## Firebase Integration

### Firebase Authentication

Firebase Authentication is used for:

- Creating user accounts
- Signing users in
- Signing users out
- Updating the user's display name

### Cloud Firestore

Cloud Firestore is used to store and manage tasks.

Each task contains information such as:

- Title
- Description
- User ID (UID)

The UID connects each task to the user who created it.

Firestore real-time listeners are used so task changes are reflected automatically without manually refreshing the application.

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── AddTask.js
│   └── TaskItem.js
├── navigation/
├── screens/
│   ├── SplashScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── Home.js
│   ├── TaskDetails.js
│   ├── Profile.js
│   └── AboutScreen.js
└── styles/
    ├── colors.js
    └── fonts.js
```

## Main Components

### AddTask

Responsible for receiving the task title and description from the user and passing the data to the Home screen.

### TaskItem

Responsible for displaying each task inside the task list.

## Task Management

Tasks are retrieved from Cloud Firestore according to the currently authenticated user's UID.

The application supports the following CRUD operations:

- Create
- Read
- Update
- Delete

Firestore `onSnapshot` is used to listen for real-time changes.

## Custom Styling

The application uses centralized styling files for colors and fonts.

The Inter font family is used throughout the application to maintain a consistent design.

## Requirements

Before running the project, make sure the following are installed:

- Node.js
- npm
- React Native development environment
- Android Studio / Android SDK
- Java JDK

## Installation

Clone the repository:

```bash
git clone https://github.com/samermostafa/reactnativeproject.git
```

Open the project:

```bash
cd reactnativeproject
```

Install dependencies:

```bash
npm install
```

Start Metro:

```bash
npm start
```

In another terminal, run the Android application:

```bash
npx react-native run-android
```

## Developer

**Samer Qunoo**  
**Student ID:** 120230688

Software Engineering Student  
University of Palestine

## Project Information

This project was developed as a React Native course project to demonstrate:

- React Native Components
- State Management using Hooks
- Props and Component Communication
- Firebase Integration
- Authentication
- Cloud Firestore
- CRUD Operations
- Navigation
- Project Structure
- Custom Fonts and Styling

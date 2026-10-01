# 🎓 Campus Lost & Found

A web-based **Campus Lost & Found Management System** designed to help students and staff report, search for, and recover lost belongings within a university campus.

The system provides a centralized platform where users can publish information about lost or found items, search for items based on relevant details, submit claims, and manage the status of reported items.

---

## 📌 Table of Contents

* [About the Project](#-about-the-project)
* [Problem Statement](#-problem-statement)
* [Objectives](#-objectives)
* [Key Features](#-key-features)
* [System Users](#-system-users)
* [System Workflow](#-system-workflow)
* [Entities](#-entities)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [Prerequisites](#-prerequisites)
* [Installation](#-installation)
* [Environment Variables](#-environment-variables)
* [Running the Application](#-running-the-application)
* [Application Features](#-application-features)
* [User Authentication](#-user-authentication)
* [Lost and Found Items](#-lost-and-found-items)
* [Claim Management](#-claim-management)
* [Item Status](#-item-status)
* [Database](#-database)
* [API Overview](#-api-overview)
* [Validation and Error Handling](#-validation-and-error-handling)
* [Security](#-security)
* [Future Improvements](#-future-improvements)
* [Testing](#-testing)
* [Screenshots](#-screenshots)
* [Contributors](#-contributors)
* [License](#-license)
* [Acknowledgements](#-acknowledgements)

---

# 📖 About the Project

**Campus Lost & Found** is a web application developed to provide an efficient solution for managing lost and found belongings within a university environment.

Students frequently lose personal belongings such as:

* 📱 Mobile phones
* 💳 Student cards
* 🎒 Bags
* 🔑 Keys
* 👓 Glasses
* 📚 Books
* 💻 Laptops
* 🎧 Earphones
* 🪪 Identification cards
* 🧴 Personal items

In many cases, information about these items is shared through informal communication channels such as WhatsApp groups, social media groups, or word of mouth. This can make it difficult for the person who lost an item to locate it.

This project provides a **centralized digital platform** where users can report lost or found items and interact with other users to help return belongings to their rightful owners.

---

# ❗ Problem Statement

When an item is lost on a university campus, students may not know where to report it or how to find out whether someone has discovered it.

Existing informal methods can have several limitations:

* Information can easily get lost in large group chats.
* Users may not see older posts.
* There is no structured search mechanism.
* It can be difficult to verify ownership.
* Lost and found information may be scattered across multiple platforms.
* There is no centralized status tracking system.
* Users may not know whether an item has already been claimed.

Therefore, a dedicated **Campus Lost & Found Management System** can provide a more organized and accessible solution.

---

# 🎯 Objectives

The main objectives of this project are:

1. To provide a centralized platform for reporting lost and found items.
2. To allow users to easily search for reported items.
3. To provide detailed information about each item.
4. To allow users to submit claims for items they believe belong to them.
5. To maintain a record of claims associated with each item.
6. To allow users to track the status of reported items.
7. To reduce the time required to recover lost belongings.
8. To provide a simple and user-friendly interface for campus users.

---

# ✨ Key Features

## 👤 User Management

* User registration
* User login
* User authentication
* User profile management
* Secure access to user-specific features

## 📦 Item Management

Users can:

* Report lost items
* Report found items
* Add item descriptions
* Add the location where the item was lost/found
* Add images of items
* View reported items
* Update item information
* Delete their own reports

## 🔍 Search and Discovery

Users can search for items using information such as:

* Item title
* Category
* Location
* Lost/Found status
* Description

## 🙋 Claim Management

Users can submit claims for items they believe belong to them.

A claim can contain:

* Item reference
* Claimer information
* Claim explanation
* Additional identifying information
* Claim status

## 📊 Status Tracking

Items can have different statuses such as:

* Lost
* Found
* Claimed
* Resolved

This allows users to understand the current state of an item.

---

# 👥 System Users

The system is designed primarily for **students and staff members of a university campus**.

### Student / Staff User

A registered user can:

* Create an account
* Log in
* Report lost items
* Report found items
* Search for items
* View item details
* Submit claims
* Manage their own reports
* View their submitted claims

---

# 🔄 System Workflow

The basic workflow of the system is:

```text
User
  │
  ▼
Register / Login
  │
  ▼
Browse Lost & Found Items
  │
  ├───────────────┐
  │               │
  ▼               ▼
Report Item    Search Item
  │               │
  │               ▼
  │          View Item Details
  │               │
  │               ▼
  │          Submit Claim
  │               │
  └───────────────┘
          │
          ▼
     Item Resolution
```

---

# 🧩 Entities

The system is designed around several core entities.

## 1. User

The **User** entity stores information about users who interact with the application.

Typical attributes include:

* `userId`
* `name`
* `email`
* `password`
* `createdAt`

---

## 2. Item

The **Item** entity represents a lost or found belonging.

Typical attributes include:

* `itemId`
* `title`
* `description`
* `location`
* `image`
* `type`
* `status`
* `userId`
* `createdAt`

The `type` field can identify whether the item was:

* Lost
* Found

---

## 3. Claim

The **Claim** entity represents a user's request to claim an item.

Typical attributes include:

* `claimId`
* `itemId`
* `userId`
* `claimerNote`
* `status`
* `createdAt`

The Claim entity establishes relationships between users and items.

---

# 🛠 Technology Stack

The technologies used in this project may include:

### Frontend

* React
* JavaScript
* HTML5
* CSS3
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman

> Update this section according to the technologies actually used in your implementation.

---

# 📁 Project Structure

A typical project structure can look like this:

```text
campus-lost-found/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── assets/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

# 🚀 Getting Started

Follow the instructions below to run the project locally.

---

# 📋 Prerequisites

Before running the project, make sure you have the following installed:

### Node.js

Download and install Node.js from the official website.

### Git

Git is required to clone and manage the project repository.

### MongoDB

MongoDB is required if the project uses MongoDB as its database.

You may use either:

* MongoDB Community Server
* MongoDB Atlas

---

# 📥 Installation

## 1. Clone the Repository

Clone the project using Git:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project directory:

```bash
cd campus-lost-found
```

---

# 📦 Install Dependencies

If the frontend and backend are separate applications, install dependencies in both directories.

### Frontend

```bash
cd client
npm install
```

### Backend

Open another terminal:

```bash
cd server
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Do not upload sensitive information such as passwords, API keys, or database credentials to GitHub.

The `.env` file should be included in `.gitignore`.

---

# ▶️ Running the Application

## Start the Backend

Inside the server directory:

```bash
npm run dev
```

The backend server should start on:

```text
http://localhost:5000
```

---

## Start the Frontend

Inside the client directory:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

The exact port may differ depending on the project configuration.

---

# 💻 Application Features

## 🏠 Home Page

The home page provides users with an overview of the system.

It can contain:

* Application introduction
* Recently reported items
* Lost items
* Found items
* Search functionality
* Navigation options

---

# 🔑 User Authentication

Users need to create an account before accessing protected features.

### Registration

A user can register using information such as:

* Name
* Email
* Password

### Login

Registered users can log in using their credentials.

Authentication helps ensure that only authorized users can perform actions such as creating or managing reports.

---

# 📦 Reporting a Lost Item

A user who has lost an item can create a lost-item report.

The report may contain:

```text
Item Title
Description
Category
Location
Date
Image
Additional Information
```

Example:

```text
Title: Black Wallet

Description:
Black leather wallet containing a student ID card.

Location:
University Library

Type:
Lost
```

---

# 🔎 Reporting a Found Item

A user who discovers an item can create a found-item report.

Example:

```text
Title: Blue Water Bottle

Description:
Blue water bottle found near the university cafeteria.

Location:
Main Cafeteria

Type:
Found
```

This allows the owner to search for the item and submit a claim.

---

# 🔍 Searching for Items

Users can search the database for relevant items.

For example, a user who lost a black wallet can search for:

```text
Black wallet
```

Search results can display:

* Item image
* Item title
* Location
* Item type
* Current status

Users can then open an item to view more details.

---

# 🙋 Claiming an Item

When a user finds an item that may belong to them, they can submit a claim.

The claim can include an explanation such as:

```text
I believe this is my wallet because it contains
my student ID card and a small photo inside.
```

The item owner or responsible user can then review the claim.

---

# 📊 Item Status

The system uses statuses to track the current state of an item.

### Lost

The item has been reported as lost.

### Found

Someone has reported finding the item.

### Claimed

A user has submitted a claim for the item.

### Resolved

The item has been successfully returned or the case has been completed.

Example:

```text
Lost
  ↓
Found
  ↓
Claim Submitted
  ↓
Claim Verified
  ↓
Resolved
```

---

# 🗄 Database

The application stores information in a database.

A simplified relationship between the main entities can be represented as:

```text
USER
 │
 │ 1
 │
 │
 │ Many
 ▼
ITEM
 │
 │ 1
 │
 │ Many
 ▼
CLAIM
```

This means:

* One user can report multiple items.
* One item can have multiple claims.
* A claim belongs to a particular user and item.

---

# 🔌 API Overview

The backend can provide RESTful API endpoints for communication between the frontend and database.

Example endpoint structure:

## User APIs

```text
POST /api/users/register
POST /api/users/login
GET  /api/users/profile
```

## Item APIs

```text
GET    /api/items
GET    /api/items/:id
POST   /api/items
PUT    /api/items/:id
DELETE /api/items/:id
```

## Claim APIs

```text
POST /api/claims
GET  /api/claims
GET  /api/claims/:id
PUT  /api/claims/:id
```

> The exact endpoints depend on the final backend implementation.

---

# ✅ Validation and Error Handling

The application should validate user input before processing requests.

Examples include:

* Required fields cannot be empty.
* Email addresses should have a valid format.
* Password requirements should be checked.
* Invalid item IDs should be handled.
* Unauthorized requests should be rejected.
* Duplicate or invalid claims should be handled appropriately.

The system should also provide meaningful error messages to users.

Example:

```text
"Please provide an item title."
```

or:

```text
"Unable to submit claim. Please try again."
```

---

# 🔒 Security

Security is an important part of the system.

The application should follow practices such as:

* Password hashing
* Authentication
* Authorization
* Protected API routes
* Input validation
* Environment variables for sensitive information
* Avoiding exposure of database credentials
* Preventing unauthorized modification of other users' data

Sensitive configuration values should never be committed to GitHub.

---

# 🧪 Testing

The system can be tested using tools such as **Postman** and browser-based testing.

Testing can include:

### User Testing

* Registration
* Login
* Invalid credentials
* Duplicate accounts

### Item Testing

* Creating an item
* Updating an item
* Deleting an item
* Searching for an item
* Viewing item details

### Claim Testing

* Creating a claim
* Viewing claims
* Updating claim status
* Preventing invalid claims

---

# 📸 Screenshots

Screenshots of the application can be added here to demonstrate the user interface.

## Home Page

Add screenshot here.

```text
![Home Page](./screenshots/home.png)
```

## Login Page

```text
![Login Page](./screenshots/login.png)
```

## Item Listing

```text
![Item Listing](./screenshots/items.png)
```

## Item Details

```text
![Item Details](./screenshots/item-details.png)
```

## Claim Form

```text
![Claim Form](./screenshots/claim.png)
```

> Create a `screenshots` folder in the repository and place your images inside it.

---

# 🔮 Future Improvements

The current system can be extended with additional functionality in the future.

Possible improvements include:

### 🔔 Notifications

Users could receive notifications when:

* A possible match is found.
* Someone submits a claim.
* A claim is approved or rejected.
* An item status changes.

### 🤖 Smart Matching

Machine learning could be introduced to automatically identify possible matches between lost and found reports.

For example:

```text
Lost:
Black Samsung Phone

Found:
Black Samsung Galaxy Phone
```

The system could suggest that the two reports may refer to the same item.

### 📍 Map Integration

A campus map could be integrated to allow users to select the location where an item was lost or found.

### 📷 Image-Based Search

Users could upload a photograph of an item and search for visually similar reported items.

### 📱 Mobile Application

A mobile application could be developed for Android and iOS devices.

### 🛡️ Administrator Dashboard

An administrator panel could be introduced for managing:

* Users
* Reports
* Claims
* Suspicious content
* Resolved cases

---

# 📈 Possible Future System Architecture

The system can eventually be expanded into a larger architecture:

```text
                    ┌─────────────────┐
                    │      Users      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   React Web App │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   REST API      │
                    │ Node + Express  │
                    └────────┬────────┘
                             │
                 ┌───────────┴───────────┐
                 ▼                       ▼
        ┌─────────────────┐      ┌─────────────────┐
        │    Database     │      │ Authentication  │
        │    MongoDB      │      │      JWT        │
        └─────────────────┘      └─────────────────┘
```

---

# 👨‍💻 Contributors

This project was developed as an academic project.

### Development Team

* **Nethmi Pussepitiya**
* Add other team members here

---

# 🎓 Academic Purpose

This project was developed as part of an academic software development project.

The purpose of the project is to demonstrate practical knowledge of:

* Web application development
* Frontend development
* Backend development
* REST APIs
* Database management
* Authentication
* CRUD operations
* Entity relationships
* Software engineering principles
* Git and GitHub

---

# 📄 License

This project is developed for educational and academic purposes.

If you intend to make the project open source, an appropriate open-source license such as the MIT License can be added.

---

# 🙏 Acknowledgements

We would like to thank:

* Our lecturers and academic staff
* Our university
* Our project teammates
* Everyone who contributed ideas and feedback during development

---

# ⭐ Conclusion

**Campus Lost & Found** aims to provide a simple and organized way for university students and staff to manage lost and found belongings.

By replacing scattered communication methods with a centralized digital platform, the system can make it easier for users to report items, discover potentially matching reports, submit claims, and track the resolution of lost-and-found cases.

The project also provides a foundation that can be expanded in the future with advanced features such as notifications, image-based search, intelligent item matching, map integration, and mobile applications.

---

## 📬 Contact

For questions, suggestions, or contributions, please contact the project development team through the GitHub repository.

**GitHub Repository:**
`<YOUR_GITHUB_REPOSITORY_URL>`

---

⭐ **If you find this project useful, consider giving the repository a star!**

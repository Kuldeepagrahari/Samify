# 🎵 Full-Stack Spotify Clone (MERN)

A feature-rich, responsive music streaming application built using the MERN stack. This project replicates core Spotify functionalities, including music playback, album browsing, and an admin dashboard for managing content.

---

## 🚀 Overview

This application simulates a real-world music streaming platform:

- Users can browse albums, play songs, and control playback.
- A global music player ensures uninterrupted listening.
- Admins can upload songs and albums via a dedicated dashboard.
- Media files are stored in the cloud and synced with the database.

---

## 🌟 Key Features

### 🎧 User Features
- Dynamic music player (Play, Pause, Next, Previous)
- Interactive seek bar
- Album-based browsing
- Adaptive UI with gradient backgrounds based on album art
- Seamless navigation with uninterrupted playback

### 🛠 Admin Features
- Upload songs (MP3 + image)
- Create and manage albums
- Delete songs/albums
- Cloud-based media handling

### ⚡ General Features
- Global state management using Context API
- Responsive UI (mobile + desktop)
- High-performance media streaming via Cloudinary

---

## 🛠 Tech Stack

| Component        | Technology                          |
|-----------------|------------------------------------|
| Frontend        | React.js, Tailwind CSS, Vite       |
| Backend         | Node.js, Express.js                |
| Database        | MongoDB Atlas                      |
| Media Storage   | Cloudinary                         |
| State Mgmt      | Context API                        |
| Routing         | React Router DOM                   |
| API Client      | Axios                             |

---
## 📡 API Endpoints

### 🎵 Songs
- **POST** `/api/song/add` → Upload a new song  
- **GET** `/api/song/list` → Get all songs  
- **POST** `/api/song/remove` → Delete a song  

### 💿 Albums
- **POST** `/api/album/add` → Create album  
- **GET** `/api/album/list` → Get all albums  
- **POST** `/api/album/remove` → Delete album  

---

## 💡 Future Improvements
- User authentication (JWT / OAuth)  
- Playlist creation & management  
- Like / favorite songs  
- Search functionality  
- Real-time streaming enhancements  

---

## 🤝 Contributing
- Fork the repository  
- Create a new branch (`feature/your-feature-name`)  
- Commit your changes  
- Push to your branch  
- Open a Pull Request  

Contributions are welcome!

Fork the repo
Create a feature branch
Commit changes
Push and create PR


# 🧩 Matchmaker App

A simple full-stack matchmaking application built using **React**, **Node.js (Express)**, and **MongoDB**.

Users can:
- Create a profile (name, age, interests)
- Find matches with shared interests
- Shortlist users they’re interested in connecting with

---

## 📁 Project Structure

```
matchmaker-app/
│
├── backend/
│   └── index.js
|   └──config
|        └──connection.js
|   └──controllers
|      └──controllers.js
|   └──module
|      └──user.js
├── vibesync/
│   └── (React app created via CRA)
│       └── src/
|           └── assets
                  └──Components
                     └──Profile.js
                     └──Matches.js
│           └── App.js
├── README.md
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB running (local or Atlas)
- Internet for React dependencies

---

### 🔧 Backend (Node.js + Express + MongoDB)

1. Go to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install express mongoose cors
   ```

3. Start your MongoDB server:
   ```bash
   mongod
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

   Runs at: `http://localhost:5000`

---

### 💻 Frontend (React)

1. Go to the frontend directory:
   ```bash
   cd ../vibesync
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

   Runs at: `http://localhost:3000`

---

## 📡 API Route Summary

### 🔸 POST `/users`
Create a new user profile.

#### ✅ Sample Request:
```json
POST http://localhost:5000/users
Content-Type: application/json

{
  "name": "Alice",
  "age": 25,
  "interests": ["reading", "music", "travel"]
}
```

#### ✅ Sample Response:
```json
{
  "message": "User created successfully"
}
```

---

### 🔸 GET `/matches/:username`
Get users who share at least two interests with the given username.

#### ✅ Sample Request:
```
GET http://localhost:5000/matches/Alice
```

#### ✅ Sample Response:
```json
[
  {
    "name": "Bob",
    "age": 26,
    "interests": ["reading", "music", "gaming"],
  }
]
```

---

## 🛠️ Future Improvements
- Authentication (JWT)
- Profile image support
- Real-time chat using Socket.io
- Deployed version on Render/Netlify

# 🤖 InterviewIQ — AI-Powered Interview Platform

InterviewIQ is an **AI-powered interview platform** designed to help users practice interviews in a realistic environment. It conducts interviews based on the selected role, evaluates the user's responses, and provides feedback to help improve interview performance.

## 🚀 Features

* 🤖 **AI-Powered Interviews** — Conduct realistic AI-based interviews.
* 🎯 **Role-Based Questions** — Interview questions based on the selected job role.
* 🔐 **Google Authentication** — Secure login using Google.
* 💬 **Interactive Interview** — Answer questions and interact with the interview system.
* 📊 **Performance Evaluation** — Analyze interview responses and provide feedback.
* 📈 **Interview Results** — View your performance after completing the interview.
* 🗄️ **MongoDB Database** — Store user and interview-related data.
* 📱 **Responsive Design** — Works across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* React Icons
* Motion / Animations

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* Firebase Authentication
* Google OAuth

### Deployment

* Render

## 🏗️ Project Structure

```text
InterviewIQ/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/omkeshari245/3.interviewIQ.git
```

### 2. Navigate to the project

```bash
cd 3.interviewIQ
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Install backend dependencies

```bash
cd ../backend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend folder and add your required environment variables.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Add other API/Firebase credentials required by your project.

> ⚠️ Never upload your `.env` file or API keys to GitHub.

### 6. Run the backend

```bash
npm run dev
```

### 7. Run the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will then be available on your local development server.

## 🔄 How InterviewIQ Works

```text
User
  ↓
Login / Sign Up
  ↓
Select Interview Role
  ↓
AI Generates Interview
  ↓
User Answers Questions
  ↓
AI Evaluates Responses
  ↓
Performance Analysis
  ↓
Feedback & Results
```

## 🎯 Purpose

The main goal of InterviewIQ is to provide students and job seekers with an accessible platform where they can **practice interviews, identify weaknesses, and improve their confidence** before attending real interviews.

## 🔮 Future Improvements

* 🎙️ Voice-based interviews
* 🧠 More advanced AI evaluation
* 📊 Detailed performance analytics
* 📄 Resume-based interview questions
* 🎥 Video interview mode
* 🏆 Interview history and progress tracking
* 💼 Company-specific interview preparation
* 📈 Personalized improvement recommendations

## 👨‍💻 Developer

**Om Keshari**

B.Tech — Computer Science & Engineering (Data Science)

* GitHub: https://github.com/omkeshari245
* LinkedIn: https://www.linkedin.com/in/om-keshari245/

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
## 📸 Project Screenshots

### 🏠 Home Page
![Home Page](./Screenshot%202026-08-13%20183757.png)

### 🔐 Authentication
![Authentication](./Screenshot%202026-08-13%20183818.png)

### 🎤 Interview Interface
![Interview Interface](./Screenshot%202026-08-13%20183934.png)

### 📊 Interview Dashboard
![Dashboard](./Screenshot%202026-08-13%20184024.png)

### 📈 Interview Result
![Interview Result](./Screenshot%202026-08-13%20184056.png)


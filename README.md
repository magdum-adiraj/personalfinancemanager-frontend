# 💰 Personal Finance Manager - Frontend

A **React-based frontend** for the Personal Finance Manager application that allows users to register, log in and manage their income and expenses visually and interactively.  
The interface provides a seamless experience for category management, report viewing and analytical insights through custom charts.

---

## 🚀 Features

- **User Authentication**
  - Registration and login functionality integrated with backend APIs.
  - User sessions persist until logout for a smooth experience.

- **Expense & Income Management**
  - Add, update, and delete income or expense entries.
  - Categorize expenses with an **emoji picker** powered by the `emoji-picker-react` library.

- **Visual Analytics**
  - **Custom Line Chart** for income and expense trends.
  - **Custom Pie Chart** for spending distribution by category using `recharts`.

- **Reporting & Notifications**
  - View and download financial reports.
  - Receive email reports triggered from the backend.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React |
| **Charts & Data Visualization** | Recharts |
| **Emoji Picker** | emoji-picker-react |

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Backend server running

### 🛠️ Steps

1. **Clone the repository**
   ```bash
   git clone repo-link
   cd repo-directory-name
2. **Install dependencies**
   ```bash
   npm install
3. **Configure environment variables**
   - Create a .env file in the root directory with:
     ```bash
     REACT_APP_API_BASE_URL=http://localhost:8080/api/v1
3. **Run the application**
   ```bash
   npm start
4. **Access the app**
   http://localhost:3000

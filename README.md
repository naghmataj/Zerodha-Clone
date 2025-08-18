# Zerodha Clone

A **full-stack stock trading platform clone**, inspired by Zerodha, built with a MERN-style architecture.  
The project is divided into **backend**, **dashboard**, and **frontend** modules.

---

## Project Structure

Zerodha-Clone/
├── backend/ # Server-side APIs and business logic

├── dashboard/ # Authenticated dashboard UI (holdings, orders, watchlist)

├── frontend/ # Public-facing landing pages

├── .gitignore

├── README.md

---

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB  
- **Dashboard**: React.js (with charts, context/state)  
- **Frontend**: React.js (marketing/landing UI)  
- **Other Tools**: JWT Authentication, dotenv for config, GitHub for version control
- **Version Control:** Git & GitHub  

---
## 🚀 Features  

### 🔹 Backend  
- REST API endpoints for authentication and portfolio  
- Secure **JWT-based login**  
- Environment variables managed via `.env`  

### 🔹 Dashboard  
- Real-time portfolio view  
- Watchlist, holdings, and order history  
- Interactive charts and UI components  

### 🔹 Frontend  
- Landing page (Home, Pricing, About, Signup)  
- Clean UI similar to **Zerodha’s official site**  

---

## 🔮 Future Enhancements  
- Integrate real-time stock market APIs (e.g., **NSE, Alpha Vantage**)  
- Add **order placement & wallet management**  
- **2FA authentication** & improved security  
- Deployment on **Vercel/Netlify (frontend)** and **Heroku/Render (backend)**  

---

## Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/naghmataj/Zerodha-Clone.git
   cd Zerodha-Clone
2. Backend
   ```bash
   cd backend
    npm install
    cp .env.example .env   # Update .env with DB_URI, JWT_SECRET, etc.
    npm start
3. Dashboard
   ```bash
    cd ../dashboard
    npm install
    npm start
4. Dashboard
   ```bash
   cd ../frontend
    npm install
    npm start


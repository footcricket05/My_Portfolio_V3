@echo off
REM Local Testing Setup Script for Windows
REM This script helps you test the contact form locally before deploying

echo.
echo 🚀 Starting Local Development Environment...
echo.

REM Kill any existing processes on ports 3000 and 5173
echo [1/4] Cleaning up existing processes...
for /f "tokens=5" %%a in ('netstat -ano ^| find ":3000"') do taskkill /PID %%a /F >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| find ":5173"') do taskkill /PID %%a /F >nul 2>&1

REM Start backend API
echo [2/4] Starting Backend API on port 3000...
cd artifacts\api-server
set NODE_ENV=development
set DATABASE_URL=file:./database.db
start "Backend API" cmd /k "pnpm dev"
echo ✓ Backend running

REM Wait for backend to start
timeout /t 3 /nobreak

REM Start frontend
echo [3/4] Starting Frontend on port 5173...
cd ..\..\artifacts\portfolio
start "Frontend" cmd /k "pnpm dev"
echo ✓ Frontend running

echo.
echo ✅ Development environment ready!
echo.
echo 📍 Frontend URL: http://localhost:5173
echo 📍 Backend API: http://localhost:3000
echo.
echo 💬 Try submitting a message through the contact form!
echo.
echo Windows opened both servers in separate windows. Close the windows to stop.
echo.
pause

#!/bin/bash

# Local Testing Setup Script
# This script helps you test the contact form locally before deploying

echo "🚀 Starting Local Development Environment..."
echo ""

# Kill any existing processes on ports 3000 and 5173
echo "[1/4] Cleaning up existing processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true

# Start backend API
echo "[2/4] Starting Backend API on port 3000..."
cd artifacts/api-server
export NODE_ENV=development
export DATABASE_URL=file:./database.db
pnpm dev &
BACKEND_PID=$!
echo "✓ Backend running (PID: $BACKEND_PID)"

# Wait for backend to start
sleep 3

# Start frontend
echo "[3/4] Starting Frontend on port 5173..."
cd ../portfolio
pnpm dev &
FRONTEND_PID=$!
echo "✓ Frontend running (PID: $FRONTEND_PID)"

echo ""
echo "✅ Development environment ready!"
echo ""
echo "📍 Frontend URL: http://localhost:5173"
echo "📍 Backend API: http://localhost:3000"
echo ""
echo "💬 Try submitting a message through the contact form!"
echo ""
echo "To stop both servers, press Ctrl+C"

# Wait for user to interrupt
wait

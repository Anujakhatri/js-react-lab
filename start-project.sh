#!/bin/bash

# Configuration
PROJECT_ROOT="/Users/anujakhatri/Documents/js-react-lab"
BACKEND_DIR="$PROJECT_ROOT/ecommerce-backend"
FRONTEND_DIR="$PROJECT_ROOT/ecommerce-project"

echo "🚀 Starting Ecommerce Project..."

# Start Backend in a new tab
osascript -e "tell application \"Terminal\" to do script \"cd $BACKEND_DIR && npm run dev\""
echo "✅ Backend started in a new tab (Port 3000)"

# Start Frontend in a new tab
osascript -e "tell application \"Terminal\" to do script \"cd $FRONTEND_DIR && npm run dev\""
echo "✅ Frontend started in a new tab"

echo "🌐 Waiting for servers to initialize..."
echo "Backend: http://localhost:3000"
echo "Frontend: Check the frontend terminal for URL (usually http://localhost:5173)"

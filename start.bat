@echo off
setlocal
title Forge - AI Engineering Roadmap
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
    echo Node.js is required. Install it from https://nodejs.org/ and try again.
    pause
    exit /b 1
)

if not exist "node_modules\vite\bin\vite.js" (
    echo Installing project dependencies...
    call npm install
    if errorlevel 1 (
        echo Installation failed. Check your internet connection and try again.
        pause
        exit /b 1
    )
)

echo Updating the roadmap from the content files...
call npm run content
if errorlevel 1 (
    echo The roadmap update failed. See the error above.
    pause
    exit /b 1
)

set "FORGE_URL=http://127.0.0.1:5173/?launch=%RANDOM%%RANDOM%#/roadmap"
powershell -NoProfile -Command "try { $response = Invoke-WebRequest 'http://127.0.0.1:5173/src/App.tsx' -UseBasicParsing -TimeoutSec 2; if ($response.Content -match 'pipeline-map') { exit 0 } } catch {}; exit 1" >nul 2>&1
if not errorlevel 1 (
    start "" "%FORGE_URL%"
    exit /b 0
)

echo Opening Forge. Keep this window open while using the site.
echo Close this window to stop the server.
call npm run dev -- --port 5173 --strictPort --force --open "/?launch=%RANDOM%%RANDOM%#/roadmap"
if errorlevel 1 (
    echo The server could not start. Close any older server window using port 5173 and try again.
    pause
    exit /b 1
)

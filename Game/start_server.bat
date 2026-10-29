@echo off
title ENDFIELD // BACKROOMS PROTOCOL - Web Server
cd /d "%~dp0"
echo Menjalankan local server di http://localhost:8090 ...
start "" "http://localhost:8090"
python -m http.server 8090

#!/bin/bash
cd /home/kavia/workspace/code-generation/react-basic-app-249689-249705/main_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


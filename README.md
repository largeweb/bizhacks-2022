# bizhacks-2022

# OVERVIEW OF README

# Information
# Requirements
# Installation
# Running the App
# Moving to Production



# Information
# details about the bizhacks project



# Requirements
NodeJS Version 16 (LTS as of 7/21/2022)



# Installation
# Cloning the repo
git clone https://github.com/largeweb/bizhacks-2022.git
# cd into app folder
cd ./bizhacks-2022/mem-pwa/
# Install the Dependencies
npm i



# Running the App
# cd into app folder
cd ./bizhacks-2022/mem-pwa/
# Start with npm
npm start
# Or on a test server, use nodemon to keep it restarting
nodemon --exec npm start



# Moving to Production [ WARNING! ⚠️ UNTESTED! ]
# cd into app folder
cd ./bizhacks-2022/mem-pwa/
# Run build
npm run build
# Serve as PWA
serve -s build
# If you get an error, try with npx
npx serve -s build
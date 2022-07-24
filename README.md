# bizhacks-2022

# A progressive Web App for Bizhacks 2022
# Developed by Matthew Gordon

# OVERVIEW OF README

# Information
# Requirements
# Installation
# Running the App
# About bizhacks.site Server
# Moving to Production



# Information
# details about the bizhacks project
# So far it is just a simple react progressive web app
# progressive web apps are good for mobile devices
# running this app on a server



# Requirements
NodeJS Version 16 (LTS as of 7/21/2022)



# Installation
# Cloning the repo
git clone https://github.com/largeweb/bizhacks-2022.git
# cd into app folder
cd ./bizhacks-2022/mem-pwa/
# Install the Dependencies
npm i
# And these two as well (they are not automatically installed)
npm i bootstrap react-bootstrap



# Running the App
# cd into app folder
cd ./bizhacks-2022/mem-pwa/
# Start with npm
npm start
# Or on a test server, use nodemon to keep it restarting
nodemon --exec npm start



# About bizhacks.site Server
# This domain links to Debian Server running on a cloud machine (Linode)
# Every 5 minutes this cloud machine will perform a git pull on the codebase
# This keeps the server up to data with the latest state of the codebase
# Note, depending on certain changes, the server may need to be manually fixed
# These are usually package changes or structural changes (moving files around)
# Before pushing any changes, please make sure the app works locally
# Since it is a PWA, you can add this site to on your mobile device home screen



# Moving to Production [ WARNING! ⚠️ UNTESTED! ]
# cd into app folder
cd ./bizhacks-2022/mem-pwa/
# Run build
npm run build
# Serve as PWA
serve -s build
# If you get an error, try with npx
npx serve -s build
@echo off
cls

@rem This is a file I used to quickly build and test my app
@rem it helped me a lot on fixing errors and general build bugs.
@rem place it at the project root
@rem (aka the folder of your app aka the container of index.js and App.js)
@rem This line is for debug ONLY...not suitable for production:

@rem cd android && .\gradlew clean && cd .. && react-native run-android

@rem Another way, is using the custom script I wrote here:
@rem REMOVE THE @REM clauses and all of the BELOW and comment out
@rem line 10 by adding @rem in front of it and escape with a space

echo Choose what to do (Clean: C / Release: R / Debug: D)
set/p "res=>"
if %res%==R goto RELEASE
if %res%==D goto DEBUG
if %res%==C goto CLEAN
echo Invalid choice.
:CLEAN
cd android && .\gradlew clean && cd .. goto END
:DEBUG
react-native run-android goto END
:RELEASE
cd android && .\gradlew assembleRelease && cd .. goto END
:END

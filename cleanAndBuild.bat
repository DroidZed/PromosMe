@echo off
cls

@rem This is a file I used to quickly build and test my app
@rem it helped me a lot on fixing errors and general build bugs.
@rem place it at the project root
@rem (aka the folder of your app aka the container of index.js and App.js)
@rem This line is for debug ONLY...not suitable for production:

cd android && .\gradlew clean && cd .. && react-native run-android

@rem Another way, is using the custom script I wrote here:
@rem REMOVE THE @REM clauses and all of the ABOVE up to the cls line.

@rem echo Choose what to do (Release: R / Debug: D)
@rem set /p "res=>"
@rem if %res%==R goto RELEASE
@rem if %res%==D goto DEBUG
@rem echo Invalid choice.
@rem :DEBUG
@rem cd android && .\gradlew clean && cd .. && react-native run-android
@rem goto END
@rem :RELEASE
@rem cd android && .\gradlew clean && .\gradlew assembleRelease
@rem goto END
@rem :END

@echo off
cls

@rem This is a file I used to quickly build and test my app
@rem it helped me a lot on fixing errors and general build bugs.
@rem place it at the project root
@rem (aka the folder of your app aka the container of index.js and App.js)
@rem This line is for debug ONLY...not suitable for production:

cd android && .\gradlew clean && cd .. && react-native run-android

@rem Another way, is using the custom script I wrote here:
@rem REMOVE THE @REM clauses and all of the BELOW and comment out
@rem line 10 by adding @rem in front of it and escape with a space

@rem echo Choose what to do (Clean: C / Release: R / Debug: D)
@rem set/p "res=>"
@rem if %res%==R goto RELEASE
@rem if %res%==D goto DEBUG
@rem if %res%==C goto CLEAN
@rem echo Invalid choice.
@rem :CLEAN
@rem cd android && .\gradlew clean && cd .. goto END
@rem :DEBUG
@rem react-native run-android goto END
@rem :RELEASE
@rem cd android && .\gradlew assembleRelease && cd .. goto END
@rem :END

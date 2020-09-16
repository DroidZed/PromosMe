
## THIS IS THE REPO OF MY INTERNSHIP PROJECT

I made this repo to help me track my project.
If anyone is interested, feel free to download it as it's an Open Source project hosted on GitHub !

1. Setup
2. Usage
3. Installing the provided APKs

## SETUP

Dependencies: [Same as any bare workflow dependency](https://reactnative.dev/docs/environment-setup)

- Clone the repo
`git clone https://github.com/DroidZed/PromosMe.git`
- Run the following:
```
cd PromosMe
npm install
```

## Usage

Make sure you have either an [emulator installed](https://reactnative.dev/docs/environment-setup#toggle-platform:~:text=Using%20a%20virtual%20device) or a [device connected](https://reactnative.dev/docs/running-on-device) or the process my fail.

Inside the root folder:
`react-native start`

# About the fetching part in the code :
```js
 const getInfos = () => {
    fetch(url)
      .then((response) => {
        response
          .json()
          .then((data) => {
            setCollectedData(data);
          })
          .catch(alert('NO DATA TO BE RETRIEVED.'));
      })
      .catch(alert('FAILURE'));
  };

```

I'm using this to get data through my API ,which can be found [here](https://github.com/DroidZed/promo_find_me_api).
To make sure everything is working fine, make a MySQL database, feel free to configure the API to your liking and adapt it to your data.

The component***s*** your should watch for *are* these one***s***:

> HomeScreen: containing a flatlist that would show the data in a cool way

> Product: your actual data , but in JavaScript.

## Installing the provided APKs:

Go to the [release](./android/app/build/outputs/release/) folder and choose which apk is suitable for
your Android device...you can check no your CPU's architerture, you can find more about when you install Droid HardWare Info.

## A small yet very important notice :

You'll find included a file called [cleanAndBuild](./cleanAndBuild.bat)... read the comments I wrote there carefully to better make use of it.

Well, that's pretty much it !
Thanks for tuning in, Good bye !

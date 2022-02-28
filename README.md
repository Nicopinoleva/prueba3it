# React native skill test for 3IT

To compile the following application on Windows please install the following:
- Npm: https://nodejs.org/dist/v16.14.0/node-v16.14.0-x64.msi
- Yarn: 
```
npm install --global yarn
```
- Java 8 JDK: https://www.oracle.com/java/technologies/downloads/#java8-windows
- Android Studio with sdk: https://developer.android.com/studio

Then, add the following system variables:
- ANDROID_HOME: Path to the Android sdk. Most likely installed in C:\Users\$User\AppData\Local\Android\Sdk
- JAVA_HOME: Path to the Java 8 JDK. Most likely installed in 
C:\Program Files\Java\jdk1.8.0_202

Clone the repository and run:
```
yarn
```

Finally, navigate to Android folder and execute the following command:
```
./gradlew assembleRelease
```
The resulting .apk will be found at android\app\build\outputs\apk\release ready to be installed and tested. Please, contact me if there are any issues.

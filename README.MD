# Belin app
This project was created with 

```
npx react-native init
```

## Run on device

```
yarn install 
```

``` 
npx react-native run-ios
```

```
npx react-native run-android
```

or

``` 
yarn react-native run-ios
```

```
yarn react-native run-android
```


### reset cache 

```
yarn start -- --reset-cache
```

## install pod

```
cd ios
```

```
pod install
```

### clean android project

```
./gradlew clean && ./gradlew :app:bundleRelease
```



### Build Android

To build run the command on /android folder

to generate a .aab

```
./gradlew bundleRelease
```

to generate a .apk

```
./gradlew assembleRelease
```

to test release build

```
npx react-native run-android --variant=release
```
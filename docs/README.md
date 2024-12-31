# README

- https://expo.dev/accounts/huhaixiao/snacks
- 直接新增ts 文件 expo 会识别并自动增加ts 依赖

```tsx
import { StackActions } from '@react-navigation/native'

// the itemId parameter is passed to the new screen as router.params.itemId
const navigateToDetail = () => {
  StackActions.push('Details', { itemId: 42})
}
```

```tsx
import {useRoute} from '@react-navigation/native'

const DetailScreen = () => {
  const route = useRoute()
  route.name // Details
  route.params // { itemId: 42 }
  return <View>
    <Text>Details Screen</Text>
  </View>
}
```

## Setup

- [Start a new React Native project with Expo](https://reactnative.dev/docs/environment-setup#start-a-new-react-native-project-with-expo)
  - `npx create-expo-app@latest`
- [Get Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework)

### Windows Android

- https://reactnative.dev/docs/set-up-your-environment?platform=android&os=windows
- choco
  - Chocolatey
  - https://chocolatey.org/install
- nvm
  - nvm-windows
  - https://community.chocolatey.org/packages/nvm
- Java SE Development Kit (JDK)
  - `choco install -y microsoft-openjdk17`
- Android Emulator hypervisor driver is not installed.
  - Open Android Studio as admin
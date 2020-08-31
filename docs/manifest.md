---
id: manifest
title: Manifest Configuration
---

Because Orb need to access the device's network information, please add this permission below in your
[AndroidManifest.xml](https://developer.android.com/guide/topics/manifest/manifest-intro#perms).

```xml
<manifest>
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
    ...
</manifest>
```

:::caution
Orb will not work properly if you not add this permission in your Android Manifest.
:::
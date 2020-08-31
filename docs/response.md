---
id: response
title: Orb Response
---

When you call ```observe()``` method, Orb will return an ```OrbResponse``` object (accessible by a keyword **it** by
default) when each time Orb detecting a network change events in the device.

This object holds some properties as follows:

| Property     | Value Type | Default Value    | Information                                    |
| ------------ | ---------- | ---------------- | ---------------------------------------------- |
| state        | OrbState   | OrbState.UNKNOWN | Current network state of the device            |
| type         | OrbType    | OrbType.UNKNOWN  | Current network type of the device             |
| errorMessage | String     | null             | The message when error happened in Orb process |

---

## The OrbState
```OrbState``` is an enum class, that will help you determine the current network state of the device. The enum class
hold some constant as follows:

| Name                  | Information                                                 |
| --------------------- | ----------------------------------------------------------- |
| OrbState.UNKNOWN      | Orb can't determine the current network state of the device |
| OrbState.CONNECTED    | The device is connected to a network                        |
| OrbState.DISCONNECTED | The device is disconnected from network                     |

---

## The OrbType
To determine the type of network currently connected to the device is by using ```OrbType```. This is an enum class
that hold some constant as follows:

| Name               | Supported API | Information                                                |
| ------------------ | :-----------: | ---------------------------------------------------------- |
| OrbType.UNKNOWN    | 16+           | Orb can't determine the current network type of the device |
| OrbType.BLUETOOTH  | 16+           | The device is connected to a [Bluetooth](https://developer.android.com/reference/android/net/NetworkCapabilities#TRANSPORT_BLUETOOTH) network    |
| OrbType.CELULLAR   | 16+           | The device is connected to a [Celullar](https://developer.android.com/reference/android/net/NetworkCapabilities#TRANSPORT_CELLULAR) network      |
| OrbType.ETHERNET   | 16+           | The device is connected to a [Ethernet](https://developer.android.com/reference/android/net/NetworkCapabilities#TRANSPORT_ETHERNET) network      |
| OrbType.LOWPAN     | 21+           | The device is connected to a [LoWPAN](https://developer.android.com/reference/android/net/NetworkCapabilities#TRANSPORT_LOWPAN) network          |
| OrbType.VPN        | 16+           | The device is connected to a [VPN](https://developer.android.com/reference/android/net/NetworkCapabilities#TRANSPORT_VPN) network                |
| OrbType.WIFI       | 16+           | The device is connected to a [Wi-Fi](https://developer.android.com/reference/android/net/NetworkCapabilities#TRANSPORT_WIFI) network             |
| OrbType.WIFI_AWARE | 21+           | The device is connected to a [Wi-Fi Aware](https://developer.android.com/reference/android/net/NetworkCapabilities#TRANSPORT_WIFI_AWARE) network |

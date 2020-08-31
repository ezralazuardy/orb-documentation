---
slug: /
title: Introduction
---

Orb is a lifecycle-aware asynchronous network monitoring library to simplify the needs of network state monitoring
in Android. This library can help you monitor (observe) the current network state of Android device. It can give you
the current connection status, connection type, etc in realtime change events without blocking the main thread.
Orb really works well with the [MVVM architecture pattern](https://developer.android.com/jetpack/docs/guide#recommended-app-arch)
in Android.

The main point is that Orb can be used to monitor / observe the device network state and type. It's work
asynchronously so that you won't get a hang or stuttering effect on the device. Orb is also lifecycle-aware.
You don't need to worry about memory leak, all already handled by Orb. You just need to focus on functionality of your
app, and let Orb do all the network monitoring stuff.

---

## Why Orb ?

To be honest, you can create your own code to handle with Android Networking stuff by using Connectivity Manager, but,
please consider some point of these :

- Orb can help you deal with Connectivity Manager API deprecation.
- Orb works asynchronously with lifecycle-aware feature.
- Orb API designed to be simple, idiomatic, but still considering the performance and flexibility.
- Orb is free and ready to use.

So, why not give it a try?

---

## How It Works

Orb is an implementation of Android Live Data that use an observable pattern to get the network state data in realtime.
This is what makes Orb lifecycle-aware. Since the lifecycle of Live Data object is already handled automatically by
Android's lifecycle, you don't need to handle the Orb lifecycle manually. It's guarantees you to be flexible and no
memory leak. You can just start Orb and forget about it, it'll handle the lifecycle based on your Activity lifecycle
automatically.

How Orb determine the current network state and type is by using ```ConnectivityManager```. Due to some Android
ConnectivityManager API deprecation, applying network managing algorithm can be a bit hard and tricky. Here's come
Orb to the rescue. Orb is simple, powerful, sweet, and the most important, idiomatic. It's written in pure Kotlin.

---

## Latest Version

See the latest released Orb version [here](https://github.com/ezralazuardy/orb/releases).

<a href="https://jitpack.io/#ezralazuardy/orb"><img src="https://img.shields.io/github/v/release/ezralazuardy/orb" alt="release" target="_blank" rel="noopener noreferrer" /></a>
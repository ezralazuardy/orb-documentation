---
id: basic-usage
title: Basic Usage
---

Simple usage example of Orb to monitor your Android device network status.

---

## Creating Orb

To start to use Orb, first of all you need to create the instance. Since Orb class have closed constructor, the only
way to create a new instance is by using ```with()``` function. This function takes your current context as parameter.

```kotlin
val orb = Orb.with(this)    // will return a new instance of Orb
```

This instance creation of Orb is strongly recommended to be done in the ```onCreate()``` method of your
fragment or activity. The reason is that Orb instance only can observe a single observer, and one Activity is expected
only have one Orb running inside it. Considering the Activity lifecycle, action of creating an Orb instance outside
of ```onCreate()``` will be executed each time the callback used gets called (e.g. in the ```onResume()```), resulting
a memory leak because the old instance can't be used.

:::note
You can declare Orb as global, by defining a global **lateinit** variable, and pass the new Orb instance to that
variable in the ```onCreate()``` method.
:::

---

## Observing Orb

To start receiving the current device network state, you can call the ```observe()``` method from Orb instance.

```kotlin
orb.observe {
    // do something awesome..
}
```

The ```observe()``` method will return an ```OrbResponse``` (accessible by a keyword **it** by default) that hold
the device network information. You can use this to interact with your code defined inside the ```observe``` block.
Later then, Orb will convert your action defined inside observe ```block``` to be an observer. Orb will observe this
observer and when device network state is changed, the observer will get notified (executed).

If you don't want to use a direct written observer, you can use the Orb observer function builder :

```kotlin
val observer = orbObserver {
    // do something awesome..
}

orb.observe(observer)
```

:::note
It's okay to use observe() outside the onCreate() method.
:::

---

## Changing Orb's Observer

Maybe you wonder, how to change the Orb observer?, like if you want to implement different action than before when
Orb detecting network changes.

It's easy!, just call the ```observe()``` again to Orb instance will overwrite the previous Orb's observer.

```kotlin
orb.observe {
    // crush will always be a crush.. just kidding ;)
}

orb.observe {
    // this will overwrite previous observer
}
```

---

## Stopping Orb

Uhm.., what if I don't need Orb anymore, and want to stop it?. Here the ```stop()``` method will help you do that.

```kotlin
orb.stop()  // will stop the Orb instance
```

:::caution
You don't need to stop the Orb manually to prevent memory leak or else. Orb can do it without your help,
since it's lifecycle-aware. So, consider to not using ```stop()``` if you don't really need it. You wouldn't get a
new ```OrbResponse``` again (even when the device network has changed) if you've stopped the Orb.
:::

---

## Restarting Orb

If your Orb has stopped after using ```stop()``` method, you still can restart your Orb by calling ```observe()``` again.

```kotlin
orb.observe(observer)   // observing observer

orb.stop()              // stopping orb

orb.observe(observer)   // re-observing observer
```

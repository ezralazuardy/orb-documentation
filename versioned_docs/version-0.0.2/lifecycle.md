---
id: lifecycle
title: Orb Lifecycle
---

Orb have its own lifecycle that bound to the context activity.

<br/>

<div align="center">
    <img src="../static/img/orb-lifecycle.png" alt="middleware" />
</div>

---

## Listening to Orb Lifecycle

You can use the ```OrbListener``` interface to implement a callback when Orb lifecycle method is called.

To apply the listener, you can use the ```setListener()``` method.

You can also implement an ```OrbListener``` to your current Activity or Fragment, and set ```this``` as parameter to
```setListener()``` method.

```kotlin
class MainActivity : AppCompatActivity(), OrbListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // set an Orb listener
        Orb.with(this).setListener(this).observe {
            // do something awesome..
        }
    }

    // here you should override the OrbListener method
    ...
}
```

or, you can apply the ```OrbListener``` directly by creating its new instance :

```kotlin
Orb.with(this).setListener(object : OrbListener {
    // here you should override the OrbListener method
}).observe {
    // do something awesome..
}
```

:::caution
If you've set a listener to Orb, and then you set another listener to it, Orb will overwrite the old listener.
:::

```kotlin
val listener1 = object : OrbListener {
    // override the OrbListener method
}

val listener2 = object : OrbListener {
    // override the OrbListener method
}

val orb = Orb.with(this).setListener(listener1)
orb.setListener(listener2) // overwrite the old listener, applying the listener2
```

---

## The OrbListener
```OrbListener``` have several methods that can be overridden if you've implemented it in your Activity or Fragment
class. Here's the ```OrbListener```'s method : 

| Method Name           | Information                                      |
| --------------------- | ------------------------------------------------ |
| ```onOrbObserve()```  | Called after client code calls .observe()        |
| ```onOrbActive()```   | Called when activity lifecycle calls .onResume() |
| ```onOrbInactive()``` | Called when activity lifecycle calls .onPause()  |
| ```onOrbStop()```     | Called after client code calls .stop()           |
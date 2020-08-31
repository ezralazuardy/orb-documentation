---
id: installation
title: Installation
---

In order to use Orb, please install it via Gradle or Maven.

### Gradle Setup

```gradle
// project level gradle
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

```gradle
// module level gradle
dependencies {

    // replace '$version' with the latest version of orb
    implementation 'com.github.ezralazuardy:orb:$version'
}
```

### Maven Setup

```xml
<!-- <repositories> section of pom.xml -->
<repository>
    <id>jitpack.io</id>
   <url>https://jitpack.io</url>
</repository>
```

```xml
<!-- <dependencies> section of pom.xml -->
<dependency>
    <groupId>com.github.ezralazuardy</groupId>
    <artifactId>orb</artifactId>
    <version>version</version> <!-- replace 'version' with the latest version of orb -->
</dependency>
```
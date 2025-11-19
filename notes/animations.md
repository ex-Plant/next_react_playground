# Framer Motion

Chained animations
Go large and disapear

```js
<motion.button
  className="text-[2.5rem]"
  whileHover={{
    opacity: [1, 1, 0], // Stay at 1, then fade to 0
    scale: [1, 1.5, 2],
    transition: {
      duration: 0.5,
      times: [0, 0.5, 1], // 50% for first move, 100% for second
    },
  }}
>
  🍆
</motion.button>
```

# The same but with reversing back

```js
<motion.button
  className="text-[2.5rem]"
  whileHover={{
    opacity: [1, 0.7, 1],
    scale: [1, 2, 1],
    transition: {
      duration: 0.5,
      times: [0, 0.5, 1], // 50% for first move, 100% for second
    },
  }}
>
  🍆
</motion.button>
```

# Separate properties

```js
<motion.button
  className="text-[2.5rem]"
  whileHover={{
    opacity: 0,
    scale: 2,
    transition: {
      opacity: {
        duration: 0.4,
        delay: 0.2, // Start fading after scale starts
        ease: "easeIn",
      },
      scale: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }}
>
  🍆
</motion.button>
```

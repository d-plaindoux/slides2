val fruits = List("apple", "banana", "orange", "coconut")

val food = fruits.toStream
    .map(emojify)  // just "apple", "banana"
    .find(it => "🍌" == it || "🥥" == it)
    .get

feedMonkey(food)
import io.github.ilaborie.slides2.kt.SlideEngine
import io.github.ilaborie.slides2.kt.dsl.ContainerBuilder
import io.github.ilaborie.slides2.kt.dsl.markdown
import io.github.ilaborie.slides2.kt.dsl.pres
import io.github.ilaborie.slides2.kt.engine.Script
import io.github.ilaborie.slides2.kt.engine.Script.Companion.script
import io.github.ilaborie.slides2.kt.engine.Theme
import io.github.ilaborie.slides2.kt.engine.contents.BarChart
import io.github.ilaborie.slides2.kt.engine.contents.NoticeKind.Danger
import io.github.ilaborie.slides2.kt.engine.contents.NoticeKind.Info
import io.github.ilaborie.slides2.kt.engine.contents.NoticeKind.Tips
import io.github.ilaborie.slides2.kt.engine.contents.NoticeKind.Warning
import io.github.ilaborie.slides2.kt.engine.contents.barChart
import io.github.ilaborie.slides2.kt.engine.contents.inlineFigure
import io.github.ilaborie.slides2.kt.engine.contents.speaker
import io.github.ilaborie.slides2.kt.engine.plugins.*
import io.github.ilaborie.slides2.kt.jvm.extra.CanIUse.Companion.CanIUsePlugin
import io.github.ilaborie.slides2.kt.jvm.extra.Tweet.Companion.TweetPlugin
import io.github.ilaborie.slides2.kt.jvm.extra.Tweet.Companion.tweet
import io.github.ilaborie.slides2.kt.jvm.jvmConfig

private const val id = "refactoringLoop"

fun main() {
    val config = jvmConfig("presentations/refactoringLoop")

    SlideEngine
        .use(CheckContentPlugin)
        .use(TocPlugin, NavigatePlugin, GridPlugin)
        .use(TweetPlugin, CanIUsePlugin)
        .use(PrismJsPlugin(showLines = true, languages = listOf("java", "scala", "kotlin")))
        .use(MathJaxPlugin())
        .use(monteCarloPlugin)
        .run(config, refactoringLoop, listOf(Theme.jugTls))

    // Copy images
    (config.input / "img").copyOrUpdate("sloth.jpg", config.output / id)
}

private val monteCarloPlugin = object : WebPlugin {
    override val name: String = "MonteCarlo Plugin"

    override fun scripts(): List<Script> =
        listOf(script("montecarlo.js"))
}

private val refactoringLoop = pres(id = id, extraStyle = "style", title = { refactoringLoopTitle() }) {
    part("Introduction", skipHeader = true) {
        slide("Speaker", setOf("header-hidden")) {
            speaker(
                fullName = "Igor Laborie",
                classes = setOf("monkeyPatch"),
                src = "speakers/igor.jpg",
                info = "Expert Web & Java",
                links = mapOf(
                    "@ilaborie" to "https://twitter.com/ilaborie",
                    "igor@monkeypatch.io" to "mailto:igor@monkeypatch.io"
                )
            )
            inlineFigure("logos/monkeypatch.svg", "MonkeyPatch")
        }
        roadmap("Plan")
        slide("Back to Basics", styles = setOf("header-hidden")) {
            strong("#backToBasics")
            quote("Les frameworks et bibliothèques naissent et meurent, les bases restent.")
        }
//        slide("Quizz 1", styles = setOf("header-hidden")) {
//            h4("En quel langage est écrit ce code ?")
//            ul(steps = true) {
//                sourceCode("code/quizz1.java")
//                p("Java, JavaScript, C++, C, ?")
//            }
//        }
//        slide("Quizz", styles = setOf("header-hidden", "two-columns")) {
//            markdown { "#### Existe-il des langages de programmation sans `for` ?" }
//            ul(steps = true) {
//                html { "Haskell" }
//                html { "Scala <sup>*</sup>" }
//                html { "Erlang" }
//                html { "Clojure <sup>*</sup>" }
//                html { "Assembleur" }
//                html { "ByteCode Java" }
//                html { "..." }
//            }
//        }
    }
    part("🔬 Anatomie d'une boucle") {
        slide("Transformation - Java 1.4") {
            sourceCode("code/loop/transformation1.java")
        }
        slide("Transformation - Java 5") {
            sourceCode("code/loop/transformation2.java")
        }
        slide("Transformation - Java 8") {
            sourceCode("code/loop/transformation3.java")
        }
//        slide("Transformation - Java 10+") {
//            sourceCode("code/loop/transformation4.java")
//        }
        slide("Filtre") {
            sourceCode("code/loop/filter.java")
        }
        slide("Accumulation") {
            sourceCode("code/loop/accumulate.java")
        }
        slide("Imbrication") {
            sourceCode("code/loop/nest.java")
        }
        slide("Et le reste") {
            sourceCode("code/loop/other.java")
        }
    }
    part("🔃 Récursion") {
        slide("Parcours - Java") {
            sourceCode("code/recursion/transform.java")
        }
//        slide("Parcours - Kotlin 1") {
//            sourceCode("code/recursion/transform.kt")
//        }
        slide("Parcours - Kotlin") {
            sourceCode("code/recursion/transform2.kt")
        }
//        slide("Parcours - Scala 1") {
//            sourceCode("code/recursion/transform.scala")
//        }
        slide("Parcours - Scala") {
            sourceCode("code/recursion/transform2.scala")
        }
        slide("Filtre & Sortie rapide - Java") {
            sourceCode("code/recursion/find.java")
        }
//        slide("Filtre & Sortie rapide - Kotlin") {
//            sourceCode("code/recursion/find.kt")
//        }
//        slide("Filtre & Sortie rapide - Scala") {
//            sourceCode("code/recursion/find.scala")
//        }
        slide("Récursion non terminale") {
            asciiMath { "x! = x xx (x-1) xx ... xx 2 xx 1" }
            asciiMath { "1! = 0!  = 1" }
            ul(steps = true) {
                asciiMath { "fact(x)" }
                stack()
                asciiMath { "x xx fact(x-1)" }
                stack("`x`")
                asciiMath { "x xx (x-1) xx fact(x-2)" }
                stack("`x - 1`", "`x`")
                asciiMath { "x xx (x-1) xx (x-2) xx ..." }
                stack("...", "`x - 1`", "`x`")
                asciiMath { "x xx (x-1) xx (x-2) xx ... xx 2 xx 1" }
                stack("`1`", "`2`", "...", "`x - 1`", "`x`")
            }
        }
        slide("Récursion terminale") {
            ul(steps = true) {
                asciiMath { "fact(x) = fact(x, 1)" }
                asciiMath { "fact(x-1, x xx 1)" }
                asciiMath { "fact(x-2, x xx (x-1))" }
                asciiMath { "fact(... , x xx (x-1) xx (x-2) xx ...)" }
                asciiMath { "fact(1, x xx (x-1) xx (x-2) xx ... xx 2)" }
                markdown { "⚠️ Nécessite une optimisation par le compilateur" }
            }
        }
        slide("Principe récursion terminale") {
            code("javascript") {
                """tailRecFunc(scope, state) =
                  |  if (isFinish(scope)) computeResult(state)
                  |  else
                  |    (head, subScope) := scope
                  |    newState := reduce(state, head)
                  |    tailRecFunc(subScope, newState)
                """.trimMargin()
            }
        }
        slide("Récursion terminale - Java") {
            h4("Game Over")
            span("Insert Kotlin or Scala<br>To continue")
        }
        slide("Récursion terminale - Kotlin") {
            sourceCode("code/recursion/tailrec.kt")
        }
        slide("Récursion terminale - Scala") {
            sourceCode("code/recursion/tailrec.scala")
        }
//        slide("Bilan récusion") {
//            ul {
//                html { "🧩 découpage en petites tâches" }
//                html { "🤯 lisibilité" }
//                html { "✋ contrôle de l'arrêt" }
//                html { "📚 ATTENTION aux <code>StackOverflowError</code>" }
//            }
//        }
    }
    part(partTitle = { markdown { "## 🌊 `Stream`" } }, id = "stream") {
        slide("Création 1/2") {
            sourceCode("code/stream/create1.java")
        }
        slide("Création 2/2") {
            sourceCode("code/stream/create2.java")
        }
        slide("Transformation - map") {
            sourceCode("code/stream/map.java")
        }
        slide("Filtre - filter") {
            sourceCode("code/stream/filter.java")
        }
        slide("Imbrication - flatMap 1/2") {
            sourceCode("code/stream/flatmap.java")
        }
        slide("Imbrication - flatMap 2/2", setOf("header-hidden")) {
            ul(steps = true) {
                (0..6).forEach {
                    file("anim/flatmap-$it.html")
                }
            }
        }
        slide("Stream is Lazy", setOf("header-hidden")) {
            sourceCode("code/stream/lazy.java")
            ul(steps = true) {
                pre("lorem,...,amet,LOREM,...,AMET,AMET\nStream created")
                pre("Stream created")
            }
        }
        slide("Sloth", setOf("header-hidden")) { }
        slide("Opérations paresseuses & terminales") {
            definitions {
                term("Opérations paresseuses") {
                    html { "<code>map</code>" }
                    html { "<code>filter</code>" }
                    html { "<code>flatMap</code>" }
                    html { "<code>peek</code>" }
                    html { "<code>distinct</code>" }
                    html { "<code>limit</code> et <code>skip</code>" }
                    html { "..." }
                }
                term("Opérations terminales") {
                    html { "<code>reduce</code> et <code>collect</code>" }
                    html { "<code>findAny</code> et <code>findFirst</code>" }
                    html { "<code>forEach</code>" }
                    html { "<code>count</code>" }
                    html { "..." }
                }
            }
        }
//        slide("Parallèle") {
//            markdown { "Les `Stream` peuvent être exécutées en parallèle, via le `ForkJoinPool`" }
//            notice(Tips) {
//                markdown { "On peut utiliser `Stream#sequential()` ou `Stream#parallel()` pour basculer vers une exécution séquentielle, ou parallèle." }
//            }
//        }
        slide("Accumulation - Reduce 1/2") {
            sourceCode("code/stream/reduce1.java")
        }
        slide("Accumulation - Reduce 2/2") {
            notice(Tips, title = "Cas particulier") {
                markdown { "Si `Element == Accumulator`, on peut utiliser un `reduce`" }
                markdown { "Les `count`, `min`, `max`, `sum`, ... sont des réductions particulières" }
            }
            sourceCode("code/stream/reduce2.java")
//            notice(Info) {
//                markdown { "On appelle souvent cette méthode `foldLeft`" }
//            }
        }
        slide("Accumulation - collect & Collectors") {
            markdown { "Les `Stream#collect` sont justes une généralisation du `reduce`" }
            sourceCode("code/stream/collect.java")
        }
        slide("Collectors classiques") {
            markdown { "Dans `java.util.stream.Collectors`" }
            ul {
                markdown { "`toSet`, `toList` pour construire une collection" }
                markdown { "`toMap` pour construire un `Map`" }
                markdown { "`groupBy` pour grouper en une `Map<K,List<V>>`" }
                markdown { "`joining` pour construire une `String`" }
                markdown { "`summarizingInt`, `summarizingDouble`, `summarizingLong` pour les statistiques" }
                html { "..." }
            }
        }
//        slide("Illustration Java", setOf("header-hidden")) {
//            sourceCode("code/stream/exemple.java")
//        }
        slide("Et l'index ?") {
            markdown { "Et si j'ai besoin de l'_index_ ?" }
            ul {
                markdown { "😢 pas faisable facilement et _proprement_ en Java" }
                markdown { "✌️ mais il y a Kotlin et Scala..." }
            }
        }
        slide("Nouveautés Java 9+") {
            definitions {
                term("Java 9") {
                    html { "<code>Stream#takeWhile</code> et <code>Stream#dropWhile</code>" }
                    html { "<code>Stream#iterate</code> avec un prédicat" }
                    html { "<code>Stream#ofNullable</code>" }
                    html { "<code>Optional#stream</code>" }
                    html { "<code>Collectors#flatMapping</code> et <code>Collectors#filtering</code>" }
                    html { "<code>String#chars</code> et <code>String#codePoints</code>" }
                }
                term("Java 10") {
                    html { "<code>Collectors#toUnmodifiableXXX</code> pour les <code>List</code>, <code>Set</code> et <code>Map</code>" }
                }
                term("Java 11") {
                    html { "<code>String#lines</code>" }
                }
                term("Java 12") {
                    html { "<code>Collectors#teeing</code>" }
                }
            }
        }
        slide("Bilan Stream") {
            h4("🤗")
            notice(Danger, title = "À proscrire") {
                markdown { "Les effets de bord ! (on tolère les _logs_ dans le `peek`)" }
                markdown { "Les opérations non associatives dans des `Stream` parallèles" }
                markdown { "Les streams sur des `Integer`, `Double`, `Long`" }
            }
            notice(Warning) {
                markdown { "Sans bonne raison, ne faites pas de `Stream` parallèle" }
                markdown { "La lisibilité est importante" }
            }
            notice(Tips) {
                markdown { "On peut utiliser intelligemment les aspects paresseux" }
            }
        }
        slide("Bilan Stream - Java") {
            h4("😡")
            ul(steps = true) {
                markdown { "`T  reduce(T identity, BinaryOperator<T> accumulator)` et <br>`Optional<T> reduce(BinaryOperator<T> accumulator)`" }
                markdown { "`IntStream`, `DoubleStream`, `LongStream`, avec `mapToObj`, `mapToXXX`, ..." }
                markdown { "Le _boilerplate_, par exemple `.collect(Collectors.toList())`, `Collectors.groupBy`, ..." }
                markdown { "Pas de tuples en Java" }
                markdown { "Des 🐛 dans le _lazy_ du `flatMap`, voir [Java Stream API was Broken Before JDK10](https://4comprehension.com/java-stream-api-was-broken-before-jdk10/)" }
            }
        }
//        slide("Kotlin 1/3") {
//            sourceCode("code/stream/exemple1.kt")
//        }
//        slide("Kotlin 2/3") {
//            sourceCode("code/stream/exemple2.kt")
//        }
        slide("Bilan Stream - Kotlin") {
            h4("😍")
            ul(steps = true) {
                markdown { "API _lazy_ avec les `Sequence` ou non directement sur les collections" }
                markdown { "API collection **immutable** ou mutable" }
                markdown { "🎭 utilise juste les classes de Java" }
            }
        }
//        slide("Scala 1/4") {
//            sourceCode("code/stream/exemple1.scala")
//        }
//        slide("Scala 2/4") {
//            sourceCode("code/stream/exemple2.scala")
//        }
        slide("Bilan Stream - Scala") {
            h4("😻")
            ul(steps = true) {
                markdown { "API _lazy_ avec les `Stream` ou non directement sur les collections" }
                markdown { "API collection **immutable** ou mutable" }
                markdown { "Pas de réutilisation de Java" }
                markdown { "API de [`Stream`](https://www.scala-lang.org/api/2.12.3/scala/collection/immutable/Stream.html) avec la possibilité de construction récursive" }

                notice(Info) {
                    markdown { "De gros changements arrivent dans la [2.13](https://www.scala-lang.org/blog/2018/06/13/scala-213-collections.html)" }
                }
            }
        }
        slide("Scala for") {
            h4("🤢")
            sourceCode("code/stream/exemple-for.scala")
            ul {
                markdown { "Le `for` de Scala est du sucre syntaxique qui produit des `map`, `filter`, `flatMap`" }
                markdown { "Du coup on peut l'utiliser sur d'autre objects qui ont `map`, `filter`, `flatMap`" }
            }
        }
//        slide("foldLeft vs foldRight") {}
    }
    part("🏆 Qui est le meilleur ?") {
        slide("Relation d'ordre") {
            markdown {
                """Si on veut déterminer le meilleur, ils nous faut une relation d'ordre, laquelle ?"""
            }
            ul(steps = true) {
                markdown { "🏎 le plus rapide ?" }
                markdown { "💾 le moins couteux en mémoire ?" }
                markdown { "🧱 le plus maintenable ?" }
                markdown { "🈂 le plus lisible ?" }
                markdown { "..." }
            }
        }
        slide("Java & performances") {
            ul {
                markdown { "📏 faire des micro-benchmark en Java, c'est pas évident" }
                markdown { "♨️ la JVM à besoin de chauffer (JIT)" }
                link("http://openjdk.java.net/projects/code-tools/jmh/", "JMH")
                link(
                    "https://daniel.mitterdorfer.name/articles/2014/jmh-microbenchmarking-intro/",
                    "Microbenchmarking in Java with JMH (5 articles)"
                )
            }
//            notice(Tips, "Avis personel") {
//                markdown {
//                    """Quand on utilise des I/O,
//                      |il suffit de se concentrer sur leur réduction et
//                      |choisir de bonnes structures de données,
//                      |pour avoir des performances raisonables.""".trimMargin()
//                }
//            }
        }
        slide("Rust", styles = setOf("header-hidden")) {
            figure("img/rust.png", "Rewrite everything in Rust")
        }
        slide("MonteCarlo π") {
            html { """<div class="montecarlo"></div>""" }
            asciiMath { """((pi * r^2) / 4 ) / r^2 = pi  / 4 ~~ ("nb. in") / ("nb. total")""" }
            html { """<div>avec <span class="math-ascii">`r=1`</span></div>""" }
            html {
                """<div class="result">
                    <div class="pi"><span class="math-ascii">`pi ~~`</span><output></output></div>
                    <div class="info"><span class="in"></span><span class="out"></span><span class="count"></span></div>
                   </div>
                """.trimIndent()
            }
            html { """<button class="btn"></button> """ }
        }
        slide("MonteCarlo - Point") {
            sourceCode("code/montecarlo/point.java")
        }
        slide("MonteCarlo - Java for") {
            sourceCode("code/montecarlo/for.java")
        }
//        slide("MonteCarlo - Java 3") {
//            sourceCode("code/montecarlo/recursion.java")
//        }
        slide("MonteCarlo - Java stream") {
            sourceCode("code/montecarlo/stream.java")
        }
        slide("MonteCarlo - Java stream parallèle") {
            sourceCode("code/montecarlo/streamP.java")
        }
        slide("MonteCarlo - Kotlin for") {
            sourceCode("code/montecarlo/for.kt")
        }
        slide("MonteCarlo - Kotlin tailrec") {
            sourceCode("code/montecarlo/recursion.kt")
        }
        slide("MonteCarlo - Kotlin collection") {
            sourceCode("code/montecarlo/col.kt")
        }
        slide("MonteCarlo - Kotlin séquence") {
            sourceCode("code/montecarlo/stream.kt")
        }
        slide("MonteCarlo - Kotlin séquence parallèle") {
            sourceCode("code/montecarlo/streamP.kt")
        }
        slide("MonteCarlo - Scala for") {
            sourceCode("code/montecarlo/for.scala")
        }
        slide("MonteCarlo - Scala tailrec") {
            sourceCode("code/montecarlo/recursion.scala")
        }
        slide("MonteCarlo - Scala collection") {
            sourceCode("code/montecarlo/col.scala")
        }
        slide("MonteCarlo - Scala stream") {
            sourceCode("code/montecarlo/stream.scala")
        }
        slide("MonteCarlo - Scala stream parallèle") {
            sourceCode("code/montecarlo/streamP.scala")
        }
        slide("Disclaimer", styles = setOf("header-hidden")) {
            markdown {
                """#### Disclaimer
                  |
                  |>REMEMBER: The numbers below are just data. To gain reusable insights,
                  |you need to follow up on why the numbers are the way they are.
                  |Use **profilers** (see `-prof`, `-lprof`), design factorial experiments,
                  |perform baseline and negative tests that provide experimental control,
                  |make sure the benchmarking environment is safe on JVM/OS/HW level,
                  |**ask for reviews** from the domain experts.<br>
                  |**Do not assume the numbers tell you what you want them to tell.**
                  |""".trimMargin()
            }
            html {
                """<span class="math-ascii">`=>`</span> 🎳 venez lire, tester, critiquer, proposer des PR sur le <a href="https://github.com/ilaborie/refactorLoops">dépôt Github</a>"""
            }
        }
        slide("MonteCarlo - performance 1000 points") {
            barChart(
                "1_000 points sur OpenJDK (HotSpot) 8.0.202",
                values = mapOf(
                    "<span class=\"kotlin\"></span> tailrec" to 24803, //
                    "<span class=\"scala\"></span> tailrec" to 24801,
                    "<span class=\"scala\"></span> for" to 23318,
                    "<span class=\"kotlin\"></span> for" to 23123,
                    "<span class=\"java\"></span> for" to 21267, //
                    "<span class=\"java\"></span> stream" to 20108,
                    "<span class=\"scala\"></span> collection" to 18195, //
                    "<span class=\"kotlin\"></span> sequence" to 17943,
                    "<span class=\"kotlin\"></span> collection" to 17287,
                    "<span class=\"scala\"></span> stream" to 11082
                ),
                factor = { it },
                infoFn = { "$it ops/s" },
                mode = BarChart.Companion.BarChartCustom(
                    min = 0,
                    max = 24803,
                    low = 19000,
                    high = 22000,
                    optimum = 24803
                )
            )
            asciiMath { """"tailrec" ~~ 40.3mus > "for" ~~ 47.0mus > "stream" ~~ 49.7mus > "collection" ~~ 55.0mus""" }
        }
        slide("MonteCarlo - performance 10M points") {
            barChart(
                "10_000_000 points sur OpenJDK (HotSpot) 8.0.202",
                values = mapOf(
                    "<span class=\"scala\"></span> tailrec" to 2.482, // 403ms
                    "<span class=\"kotlin\"></span> tailrec" to 2.472,
                    "<span class=\"kotlin\"></span> for" to 2.310,
                    "<span class=\"scala\"></span> for" to 2.278,
                    "<span class=\"java\"></span> for" to 2.111, // 474ms
                    "<span class=\"kotlin\"></span> sequence" to 1.987,
                    "<span class=\"java\"></span> stream" to 1.967,
                    "<span class=\"scala\"></span> collection" to 1.664, // 601ms
                    "<span class=\"kotlin\"></span> collection" to 1.634,
                    "<span class=\"scala\"></span> stream" to 0.277
                ),
                factor = { (it * 1000).toInt() },
                infoFn = { "$it ops/s" },
                mode = BarChart.Companion.BarChartCustom(
                    min = 0,
                    max = 2482,
                    low = 1800,
                    high = 2000,
                    optimum = 2482
                )
            )
            asciiMath { """"tailrec" ~~ 403ms > "for" ~~ 474ms > "stream" ~~ 508ms > "collection" ~~ 601ms""" }
        }
        slide("MonteCarlo - performance parallèle") {
            barChart(
                "10_000_000 points sur OpenJDK (HotSpot) 8.0.202",
                values = mapOf(
                    "<span class=\"scala\"></span> tailrec" to 2.482, // 403ms
                    "<span class=\"kotlin\"></span> tailrec" to 2.472,
                    "<span class=\"kotlin\"></span> for" to 2.310,
                    "<span class=\"scala\"></span> for" to 2.278,
                    "<span class=\"java\"></span> for" to 2.111, // 474ms
                    "<span class=\"kotlin\"></span> sequence" to 1.987,
                    "<span class=\"java\"></span> stream" to 1.967,
                    "<span class=\"scala\"></span> collection" to 1.664, // 601ms
                    "<span class=\"kotlin\"></span> collection" to 1.634,
                    "<span class=\"kotlin\"></span> sequence ∥" to 1.571,
                    "<span class=\"scala\"></span> stream ∥" to 0.468,
                    "<span class=\"scala\"></span> stream" to 0.277,
                    "<span class=\"java\"></span> stream ∥" to 0.194
                ),
                factor = { (it * 1000).toInt() },
                infoFn = { "$it ops/s" },
                mode = BarChart.Companion.BarChartCustom(
                    min = 0,
                    max = 2482,
                    low = 1800,
                    high = 2000,
                    optimum = 2482
                )
            )
            markdown { "😱 le code parallèle" }
        }
        slide("MonteCarlo - performance parallèle 2", styles = setOf("header-hidden")) {
            barChart(
                "10_000_000 points sur OpenJDK (HotSpot) 8.0.202",
                values = mapOf(
                    "<span class=\"java\"></span> stream ∥ 2" to 7.654,
                    "<span class=\"kotlin\"></span> sequence ∥ 2" to 7.224,
                    "<span class=\"scala\"></span> tailrec" to 2.482, // 403ms
                    "<span class=\"kotlin\"></span> tailrec" to 2.472,
                    "<span class=\"kotlin\"></span> for" to 2.310,
                    "<span class=\"scala\"></span> for" to 2.278,
                    "<span class=\"java\"></span> for" to 2.111, // 474ms
                    "<span class=\"kotlin\"></span> sequence" to 1.987,
                    "<span class=\"java\"></span> stream" to 1.967,
                    "<span class=\"scala\"></span> collection" to 1.664, // 601ms
                    "<span class=\"kotlin\"></span> collection" to 1.634,
                    "<span class=\"kotlin\"></span> sequence ∥" to 1.571,
                    "<span class=\"scala\"></span> stream ∥ 2" to 0.598,
                    "<span class=\"scala\"></span> stream ∥" to 0.468,
                    "<span class=\"scala\"></span> stream" to 0.277,
                    "<span class=\"java\"></span> stream ∥" to 0.194
                ),
                factor = { (it * 1000).toInt() },
                infoFn = { "$it ops/s" },
                mode = BarChart.Companion.BarChartCustom(
                    min = 0,
                    max = 7654,
                    low = 6000,
                    high = 7000,
                    optimum = 7654
                )
            )
        }
        slide("SplittableRandom") {
            markdown {
                "🎲 depuis Java 8 [`SplittableRandom`](https://docs.oracle.com/javase/8/docs/api/java/util/SplittableRandom.html)"
            }
        }
        slide("Separation of Concerns") {
            ul(classes = setOf("compare")) {
                file("code/soc/imp.html")
                file("code/soc/stream.html")
            }
            ul {
                //                figure(
//                    "img/SoC-MarioFusco.jpg",
//                    "Separation of Concerns",
//                    copyrightBlock = "[**@mariofusco**](https://twitter.com/mariofusco/status/571999216039542784)".markdown
//                )

                markdown { "[**@mariofusco**](https://twitter.com/mariofusco/status/571999216039542784)" }
                link("https://www.youtube.com/watch?v=84MfG4tp30s", "Lazy Java par Mario Fusco")
            }
        }
        slide("Prédisposition aux 🐛") {
            sourceCode("code/loop/transformation1.java")
        }
        slide("Prédisposition aux 🐛 dangereux") {
            sourceCode("code/loop/transformation3.java")
        }
        slide("Pas tous du même avis") {
            link("https://www.javacodegeeks.com/2015/12/3-reasons-shouldnt-replace-loops-stream-foreach.html") {
                html { "3 Reasons why You Shouldn’t Replace Your for-loops by Stream forEach" }
            }
        }
        slide("Exemple colonnes d'Excel - for") {
            span("<code>A</code>, <code>B</code>, ..., <code>Z</code>, <code>AA</code>, <code>AB</code>, ..., <code>ZZ</code>, <code>AAA</code>, ...")
            sourceCode("code/excel/for.kt")
        }
        slide("Exemple colonnes d'Excel - récursif") {
            sourceCode("code/excel/recursion.kt")
        }
        slide("Exemple colonnes d'Excel - séquence") {
            sourceCode("code/excel/seq.kt")
        }
    }
    part("Conclusion") {
        slide("Bilan") {
            span("<code>goto</code> firstQuote")
            quote {
                markdown {
                    """Les frameworks et bibliothèques naissent et meurent,
                      |les bases <ins>et les styles de programmation</ins> restent.""".trimMargin()
                }
            }
            markdown { "RxJava, Reactor, Spark, Kafka stream, ..." }
            quote {
                markdown {
                    """Il suffit de choisir le langage, les frameworks,
                      |et les bibliothèques qui correspondent aux styles.<br>
                      |Choisissiez un style qui correspond à vos contraintes et vos goûts.""".trimMargin()
                }
            }
            link("http://www.flatmapthatshit.com/", "Si vous avez du mal à choisir")
        }
        slide("FP") {
            ul(steps = true) {
                html { "Lambda et fonctions d'ordre supérieur" }
                html { "Pas d'effet de bord" }
                html { "Immutablilté" }
                html { """<span class="math-ascii">`=>`</span> Ceci est une présentation sur la programmation fonctionnelle""" }
                figure(
                    "img/functional.png", "Functional",
                    copyrightBlock = "[https://xkcd.com/1270/](https://xkcd.com/1270/)".markdown
                )
            }
        }
        slide("FP 🍌") {
            ul(steps = true) {
                markdown {
                    """[Functional Programming with Bananas, Lenses, Envelopes and Barbed Wire](http://eprints.eemcs.utwente.nl/7281/01/db-utwente-40501F46.pdf) - Erik Meijer and J. Hughes and M.M. Fokkinga and Ross Paterson" - 1991
                        |
                        |> We develop a calculus for lazy functional programming based
                        |on recursion operators associated with data type definitions.
                        |For these operators we derive various algebraic laws that are useful
                        |in deriving and manipulating programs.
                        |We shall show that all example functions in
                        |Bird and Wadler's "Introduction to Functional Programming"
                        |can be expressed using these operators.
                    """.trimMargin()
                }
                tweet("384105824315928577")
            }
        }
        slide("Crafters") {
            ul(steps = true) {
                html { "❓ Quand vous codez, posez-vous des questions !" }
                html { "🔪 Aiguisez votre esprit critique !" }
                html { "🗣 Partagez vos questionnements, vos solutions, vos idées farfelues !" }
            }
        }
        slide("Fin", styles = setOf("header-hidden")) {
            markdown {
                """### 🍕 ou ❓"""
            }
        }
    }
}

private fun ContainerBuilder.refactoringLoopTitle() {
    h1("🏋️‍♂️ Refactoring sans les <code>for</code>")
}

private fun ContainerBuilder.stack(vararg strings: String) {
    ul(classes = setOf("stack")) {
        strings.forEach { span(it) }
    }
}
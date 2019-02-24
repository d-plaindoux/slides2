package io.github.ilaborie.slides2.kt.engine.renderers

import io.github.ilaborie.slides2.kt.SlideEngine
import io.github.ilaborie.slides2.kt.engine.Presentation
import io.github.ilaborie.slides2.kt.engine.Renderer
import io.github.ilaborie.slides2.kt.engine.Renderer.Companion.RenderMode
import io.github.ilaborie.slides2.kt.engine.Renderer.Companion.RenderMode.Html
import io.github.ilaborie.slides2.kt.engine.Slide


object PresentationHtmlRenderer : Renderer<Presentation> {
    override val mode: RenderMode =
        Html

    override fun render(content: Presentation): String =
        with(SlideEngine) {
            // FIXME Themes
            val allSlides = listOf(content.coverSlide) + content.parts.flatMap { it.allSlides }
            val body = allSlides
                .windowed(2, 1, true)
                .fold(emptyList<Slide>()) { acc, list ->
                    val previous = if (acc.isEmpty()) null else acc.last().id
                    val next = list.getOrNull(1)?.id
                    val slide = list.first().copy(previous = previous, next = next)
                    acc + slide
                }
                .joinToString("\n") { render(mode, it) }
            """<!doctype html>
            |<html lang="${content.lang}">
            |<head>
            |  <meta charset="utf-8">
            |  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
            |  <title>${content.sTitle}</title>
            |</head>
            |<body>
            |  <header>
            |    ${render(mode, content.title)}
            |  </header>
            |  <main>
            |    <section id="${content.id.id}" class="cover">
            |${render(mode, content.title).prependIndent("      ")}
            |    </section>
            |${body.prependIndent("    ")}
            |  </main>
            |</body>
            |</html>
        """.trimMargin()
        }
}
package io.github.ilaborie.slides2.kt.engine.renderers

import io.github.ilaborie.slides2.kt.SlideEngine
import io.github.ilaborie.slides2.kt.engine.Renderer
import io.github.ilaborie.slides2.kt.engine.Renderer.Companion.RenderMode
import io.github.ilaborie.slides2.kt.engine.Renderer.Companion.RenderMode.Html
import io.github.ilaborie.slides2.kt.engine.Slide


object SlideHtmlRenderer : Renderer<Slide> {
    override val mode: RenderMode = Html

    override fun render(content: Slide): String =
        with(SlideEngine) {
            val classes = content.styles.joinToString(" ")
            val body = content.content.joinToString("\n") {
                render(mode, it)
            }

            """
                |<section id="${content.id.id}"${if (classes == "") "" else """ class="$classes""""}>
                |  <header>
                |${render(mode, content.title).prependIndent("    ")}
                |  </header>
                |  <nav class="previous">
                |    ${content.previous?.let { """<a href="#${it.id}" aria-label="previous slide"></a>""" } ?: ""}
                |  </nav>
                |  <div class="body">
                |${body.prependIndent("    ")}
                |  </div>
                |  <nav class="next">
                |    ${content.next?.let { """<a href="#${it.id}" aria-label="next slide"></a>""" } ?: ""}
                |  </nav>
                |  <footer></footer>
                |</section>
            """.trimMargin()
        }
}
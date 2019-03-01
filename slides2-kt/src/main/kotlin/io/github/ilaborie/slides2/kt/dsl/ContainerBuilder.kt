package io.github.ilaborie.slides2.kt.dsl

import io.github.ilaborie.slides2.kt.cli.Styles
import io.github.ilaborie.slides2.kt.engine.Content
import io.github.ilaborie.slides2.kt.engine.contents.*
import io.github.ilaborie.slides2.kt.jvm.tools.MarkdownToHtml.markdownToHtml

@PresentationMarker
open class ContainerBuilder(private val presentationDsl: PresentationBuilder) {

    private val input = presentationDsl.input
    private val notifier = presentationDsl.notifier

    private val content: MutableList<() -> Content> = mutableListOf()

    fun build(): List<Content> =
        content.map { it() }

    fun file(file: String) {
        val extension = file.split(".").last()
        if (!input.exists(file)) {
            input.writeFile(file) { "TODO fill" }
            notifier.warning {
                "No file ${Styles.highlight(file)}, it has been created with dummy content"
            }
        }
        val content = { input.readFileAsString(file) }
        when (extension) {
            "md"   -> markdown(content)
            "html" -> html(content)
            "svg"  -> html(content)
            else   ->
                throw IllegalArgumentException("Unexpected file type, only *.{md,html} are supported yet, got $file")
        }
    }

    fun markdown(md: () -> String) {
        html { markdownToHtml(md()) }
    }

    fun html(html: () -> String) {
        content.add { TextContent(html(), escape = false) }
    }

    fun sourceCode(file: String) {
        val extension = file.split(".").last()
        val language = when (extension) {
            "class.txt" -> "java"
            "dex.dump"  -> "java"
            "smali"     -> "java"
            "kt"        -> "kotlin"
            "ts"        -> "typescript"
            "js"        -> "javascript"
            "sh"        -> "bash"
            "re"        -> "reason"
            else        -> extension
        }

        if (!input.exists(file)) {
            input.writeFile(file) { "TODO fill the source file $language" }
            notifier.warning {
                "No file ${Styles.highlight(file)}, it has been created with dummy content"
            }
        }
        code(language) { input.readFileAsString(file) }
    }

    fun code(language: String, codeBlock: () -> String) {
        content.add { Code(language, codeBlock()) }
    }

    fun p(text: () -> String) {
        content.add { text().p }
    }

    fun ol(steps: Boolean = false, block: ContainerBuilder.() -> Unit) {
        content.add {
            ContainerBuilder(presentationDsl)
                .apply(block)
                .build()
                .ol
                .copy(steps = steps)
        }
    }

    fun ul(steps: Boolean = false, block: ContainerBuilder.() -> Unit) {
        content.add {
            ContainerBuilder(presentationDsl)
                .apply(block)
                .build()
                .ul
                .copy(steps = steps)
        }
    }

    fun link(href: String, block: () -> Content = { href.raw }) {
        content.add { Link(href = href, content = block()) }
    }

    fun link(href: String, content: String) {
        link(href) { content.raw }
    }

    fun quote(author: String? = null, cite: String? = null, block: () -> Content) {
        content.add { Quote(author = author, cite = cite, content = block()) }
    }

    fun notice(kind: NoticeKind, block: () -> Content) {
        content.add { Notice(kind = kind, content = block()) }
    }

    fun figure(src: String, title: String, copyrightBlock: Content? = null) {
        content.add {
            val figSrc = if (input.exists(src)) {
                val extension = src.split(".").last()
                val mimeType = when (extension) {
                    "svg" -> "image/svg+xml;utf8"
                    "png" -> "image/png;base64"
                    "gif" -> "image/gif;base64"
                    "jpg" -> "image/jpeg;base64"
                    else  -> throw IllegalArgumentException("Unsupported file extension: $extension")
                }
                "data:$mimeType,${input.readFileAsString(src)}"
            } else src
            Figure(src = figSrc, title = title, copyright = copyrightBlock)
        }
    }


    fun title(level: Int, block: () -> Content) {
        content.add {
            Title(level = level, content = block())
        }
    }


    fun barChart(title: String, data: Map<String, Double>, unit: String) {
        html {
            val rows = data.map { (title, value) ->
                """<tr>
                |  <th scope="row">$title</th>
                |  <td style="--value: $value">
                |    <span>$value $unit</span>
                |  </td>
                |</tr>"""
            }.joinToString("\n")

            """a
                |<table class="table-charts bar" style="--scale: 3000">
                |  <caption id="caption-1">$title</caption>
                |  <tbody>
                |$rows
                |  </tbody>
                |</table>""".trimMargin()
        }
    }

}
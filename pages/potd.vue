<template>
  <div class="content-page">
    <h1>Problem of the Day</h1>
    <p class="page-intro">One problem per division, every day. Answers are not posted here.</p>

    <section v-for="group in groupedProblems" :key="group.division">
      <h2>Division {{ group.division }}</h2>
      <div class="potd-list">
        <article
          v-for="entry in group.entries"
          :key="entry.division + '-' + entry.date"
          class="potd-card"
        >
          <p class="potd-date">{{ formatDate(entry.date) }}</p>
          <!-- eslint-disable-next-line vue/no-v-html -- escaped in formatStatement -->
          <p class="potd-problem" v-html="formatStatement(entry.problem)"></p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import renderMathInElement from 'katex/dist/contrib/auto-render.js'
import potdProblems from '~/data/potd'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export default {
  data() {
    return {
      problems: potdProblems,
    }
  },
  computed: {
    groupedProblems() {
      const divisions = [...new Set(this.problems.map((entry) => entry.division))].sort()
      return divisions.map((division) => ({
        division,
        entries: this.problems
          .filter((entry) => entry.division === division)
          .slice()
          .sort((a, b) => a.date.localeCompare(b.date)),
      }))
    },
  },
  mounted() {
    this.renderMath()
  },
  updated() {
    this.renderMath()
  },
  methods: {
    formatDate(date) {
      // Split manually: `new Date('2026-08-07')` parses as UTC and shifts a day
      // back for viewers west of Greenwich.
      const [year, month, day] = date.split('-').map(Number)
      return `${MONTHS[month - 1]} ${day}, ${year}`
    },
    /**
     * The statements come from markdown, where authors bold the qualifiers that
     * matter ("**strictly** more than twice"). Render that emphasis rather than
     * leaving the asterisks on screen.
     *
     * Everything is HTML-escaped first and the only tags introduced are the
     * <strong> pairs built here, so nothing in the source file can inject
     * markup. Escaping leaves `$...$` and `<`, `>` intact as text once parsed,
     * which is what KaTeX needs to find and render the math afterwards.
     */
    formatStatement(text) {
      const escape = (value) =>
        value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

      // Split on math spans: `_` and `*` are ordinary characters inside LaTeX,
      // so emphasis must only ever be applied to the prose between them.
      return text
        .split(/(\$\$[\s\S]*?\$\$|\$[^$\n]*\$)/g)
        .map((part, index) =>
          index % 2 === 1
            ? escape(part)
            : escape(part).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        )
        .join('')
    },
    renderMath() {
      if (!this.$el || typeof this.$el.querySelectorAll !== 'function') return
      renderMathInElement(this.$el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      })
    },
  },
}
</script>

<style scoped>
.potd-list {
  display: grid;
  gap: 1rem;
}

.potd-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 0.2s, background 0.2s;
}

.potd-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(249, 115, 22, 0.3);
}

.potd-date {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.5rem;
}

.potd-problem {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-dim);
  line-height: 1.9;
  /* Statements arrive as several paragraphs with blank lines between them, so
     keep the line breaks the source file put there. */
  white-space: pre-line;
}

/* KaTeX lays out with its own spans; pre-line inside them adds stray gaps. */
.potd-problem >>> .katex,
.potd-problem >>> .katex-display {
  white-space: normal;
}

.potd-problem >>> .katex-display {
  margin: 0.6rem 0;
}

/* v-html content carries no scope attribute, so this needs the deep combinator. */
.potd-problem >>> strong {
  color: var(--text);
  font-weight: 700;
}

/* Formulas sit inside the sentence, so keep them close to the body size and
   only a shade brighter than the surrounding text. */
.potd-problem >>> .katex {
  font-size: 1.1em;
  color: var(--text);
}
</style>

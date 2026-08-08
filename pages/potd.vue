<template>
  <div class="content-page">
    <h1>Problem of the Day</h1>
    <p class="page-intro">One problem per division, every day. Work them at your own pace.</p>

    <section v-for="division in divisions" :key="division.number">
      <h2>Division {{ division.number }}</h2>
      <p class="division-note">{{ division.note }}</p>
      <div class="potd-list">
        <article v-for="entry in division.problems" :key="entry.date" class="potd-card">
          <p class="potd-date">{{ formatDate(entry.date) }}</p>
          <div class="potd-problem" v-html="renderProblem(entry.problem)"></div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import katex from 'katex'
import 'katex/dist/katex.min.css'
import potd from '@/data/potd.js'

const DIVISION_NOTES = {
  1: 'Advanced — early AIME to high AIME level.',
  2: 'Beginner — AMC 10 to early AIME level.',
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default {
  computed: {
    divisions() {
      const numbers = [...new Set(potd.map((entry) => entry.division))].sort((a, b) => a - b)
      return numbers.map((number) => ({
        number,
        note: DIVISION_NOTES[number] || '',
        problems: potd
          .filter((entry) => entry.division === number)
          .slice()
          .sort((a, b) => a.date.localeCompare(b.date)),
      }))
    },
  },
  methods: {
    formatDate(date) {
      // Parse as a plain calendar date so the day never shifts by timezone.
      const [year, month, day] = date.split('-').map(Number)
      return new Date(year, month - 1, day).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    renderProblem(text) {
      // Odd-indexed segments sit between a pair of `$` delimiters and are math;
      // everything else is plain text. An unmatched trailing `$` stays text.
      return text
        .split('$')
        .map((segment, index) =>
          index % 2 === 1
            ? katex.renderToString(segment, { throwOnError: false, displayMode: false })
            : escapeHtml(segment)
        )
        .join('')
    },
  },
}
</script>

<style scoped>
.division-note {
  margin: -0.5rem 0 1.25rem;
  color: var(--accent-soft);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.potd-list {
  display: grid;
  gap: 0.85rem;
}

.potd-card {
  padding: 1.25rem;
  border: 1px solid rgba(246, 240, 232, 0.12);
  background: rgba(255, 255, 255, 0.035);
}

.potd-date {
  margin: 0 0 0.6rem;
  color: var(--accent);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.potd-problem {
  overflow-x: auto;
  color: var(--text-dim);
  font-size: 0.95rem;
  line-height: 1.75;
}

/* KaTeX output arrives through v-html, so it sits outside scoped styling. */
.potd-problem >>> .katex {
  color: var(--text);
  font-size: 1em;
}

/*
 * The site pins every element to Hanken Grotesk with `font-family: ... !important`
 * on a universal selector, which outranks KaTeX's own font rules and leaves the
 * math set in the UI sans face -- symbols that KaTeX composes from its glyphs
 * (the not-equal sign, big operators, stretchy delimiters) then render wrong.
 * Restoring KaTeX's faces here, where the scoped attribute adds the specificity
 * the universal rule can't match, puts the math fonts back.
 */
.potd-problem >>> .katex,
.potd-problem >>> .katex *,
.potd-problem >>> .katex .mathit,
.potd-problem >>> .katex .mathbf,
.potd-problem >>> .katex .mainrm,
.potd-problem >>> .katex .textrm {
  font-family: KaTeX_Main, 'Times New Roman', serif !important;
}

.potd-problem >>> .katex .mathnormal,
.potd-problem >>> .katex .boldsymbol {
  font-family: KaTeX_Math, 'Times New Roman', serif !important;
}

.potd-problem >>> .katex .amsrm,
.potd-problem >>> .katex .mathbb,
.potd-problem >>> .katex .textbb {
  font-family: KaTeX_AMS !important;
}

.potd-problem >>> .katex .mathcal {
  font-family: KaTeX_Caligraphic !important;
}

.potd-problem >>> .katex .mathfrak,
.potd-problem >>> .katex .textfrak,
.potd-problem >>> .katex .mathboldfrak,
.potd-problem >>> .katex .textboldfrak {
  font-family: KaTeX_Fraktur !important;
}

.potd-problem >>> .katex .mathscr,
.potd-problem >>> .katex .textscr {
  font-family: KaTeX_Script !important;
}

.potd-problem >>> .katex .mathsf,
.potd-problem >>> .katex .textsf,
.potd-problem >>> .katex .mathboldsf,
.potd-problem >>> .katex .textboldsf,
.potd-problem >>> .katex .mathsfit,
.potd-problem >>> .katex .mathitsf,
.potd-problem >>> .katex .textitsf {
  font-family: KaTeX_SansSerif !important;
}

.potd-problem >>> .katex .mathtt,
.potd-problem >>> .katex .texttt {
  font-family: KaTeX_Typewriter !important;
}

.potd-problem >>> .katex .delimsizing.size1,
.potd-problem >>> .katex .delimsizing.mult .delim-size1 > span,
.potd-problem >>> .katex .op-symbol.small-op {
  font-family: KaTeX_Size1 !important;
}

.potd-problem >>> .katex .delimsizing.size2,
.potd-problem >>> .katex .op-symbol.large-op {
  font-family: KaTeX_Size2 !important;
}

.potd-problem >>> .katex .delimsizing.size3 {
  font-family: KaTeX_Size3 !important;
}

.potd-problem >>> .katex .delimsizing.size4,
.potd-problem >>> .katex .delimsizing.mult .delim-size4 > span {
  font-family: KaTeX_Size4 !important;
}
</style>

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
          <p class="potd-problem">{{ entry.problem }}</p>
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
}

/* Formulas sit inside the sentence, so keep them close to the body size and
   only a shade brighter than the surrounding text. */
.potd-problem >>> .katex {
  font-size: 1.1em;
  color: var(--text);
}
</style>

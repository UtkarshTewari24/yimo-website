/**
 * Problem of the Day archive.
 *
 * To publish a new POTD, append one entry to this array — nothing else needs to
 * change. The page groups by `division` and sorts by `date` on its own.
 *
 *   division: 1 or 2
 *   date:     ISO `YYYY-MM-DD` (rendered as e.g. "August 7, 2026")
 *   problem:  problem statement; inline math goes between single dollar signs
 *             and is rendered with KaTeX. Use String.raw`` so backslashes in
 *             the LaTeX do not need to be doubled.
 */
export default [
  /* ── Division 1 ── */
  {
    division: 1,
    date: '2026-07-31',
    problem: String.raw`Find the number of ways to partition the set $\{1, 2, 3, \ldots, 15\}$ into five disjoint triples $\{a, b, c\}$ such that in every triple, one element is the sum of the other two. The order of the five triples does not matter, and the order of elements within a triple does not matter.`,
  },
  {
    division: 1,
    date: '2026-08-01',
    problem: String.raw`Let $S = \{1, 2, 3, \ldots, 10\}$. Find the number of functions $f : S \to S$ satisfying $f(f(x)) = f(x)$ for all $x \in S$. Find the remainder when this number is divided by $1000$.`,
  },
  {
    division: 1,
    date: '2026-08-02',
    problem: String.raw`Let $ABC$ be an acute triangle with $AB = 25$, $BC = 26$, and $CA = 17$, and let $\omega$ be its circumcircle. The tangent to $\omega$ at $B$ and the tangent to $\omega$ at $C$ meet at a point $T$. Line $AT$ meets $\omega$ again at $D \neq A$. Let $M$ be the midpoint of $BC$. Line $AM$ meets $\omega$ again at $N \neq A$. The length $DN$ can be written as $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.`,
  },
  {
    division: 1,
    date: '2026-08-03',
    problem: String.raw`A composition of a positive integer $n$ is an ordered sequence of positive integers summing to $n$. For example, $4$ has eight compositions: $4$, $3+1$, $1+3$, $2+2$, $2+1+1$, $1+2+1$, $1+1+2$, $1+1+1+1$. Across all $2^{2025}$ compositions of $2026$, let $T$ be the total number of parts equal to $1$, counted with multiplicity. (For $n = 4$ the eight compositions above contain $0, 1, 1, 0, 2, 2, 2, 4$ ones, so $T = 12$.) Find the remainder when $T$ is divided by $1000$.`,
  },
  {
    division: 1,
    date: '2026-08-04',
    problem: String.raw`For a permutation $\sigma = (\sigma(1), \sigma(2), \ldots, \sigma(10))$ of $\{1, 2, \ldots, 10\}$, let $d(\sigma)$ be the number of indices $i$ with $1 \leq i \leq 9$ and $\sigma(i) > \sigma(i+1)$. Compute $T = \sum_{\sigma} 2^{d(\sigma)}$, the sum taken over all $10!$ permutations. Find the remainder when $T$ is divided by $1000$.`,
  },
  {
    division: 1,
    date: '2026-08-05',
    problem: String.raw`Find the sum of $a + b$ over all ordered pairs $(a, b)$ of positive integers with $a \leq 2026$ and $b \leq 2026$ satisfying $ab \mid a^2 + b^2 + 1$.`,
  },
  {
    division: 1,
    date: '2026-08-06',
    problem: String.raw`An election has two candidates. Candidate $A$ receives $1014$ votes and candidate $B$ receives $506$ votes. The $1520$ ballots are counted one at a time in a uniformly random order. Find the probability that at every moment during the count, $A$'s running total is strictly more than twice $B$'s running total. The probability can be written as $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.`,
  },
  {
    division: 1,
    date: '2026-08-07',
    problem: String.raw`Let $P(x)$ be the polynomial of degree $2026$ satisfying $P(k) = \frac{1}{k}$ for every integer $k = 1, 2, 3, \ldots, 2027$. The value $P(2028)$ can be written as $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.`,
  },

  /* ── Division 2 ── */
  {
    division: 2,
    date: '2026-07-31',
    problem: String.raw`In triangle $ABC$, $AB = 21$, $BC = 20$, and $CA = 13$. The incircle $\omega$ of triangle $ABC$ touches $BC$ at $X$. Line $AX$ meets $\omega$ again at $Y \neq X$. The length $XY$ can be written as $\frac{a\sqrt{b}}{c}$, where $a$, $b$, $c$ are positive integers, $\gcd(a, c) = 1$, and $b$ is squarefree. Find $a + b + c$.`,
  },
  {
    division: 2,
    date: '2026-08-01',
    problem: String.raw`Fifteen chairs are arranged in a circle and numbered $1$ through $15$ clockwise. A set $C$ of chairs is called spread if no two chairs in $C$ are close together around the circle, meaning that for any two distinct chairs $i, j \in C$, $\min(|i - j|, 15 - |i - j|) \geq 3$. Counting the empty set as spread, find the total number of spread sets.`,
  },
  {
    division: 2,
    date: '2026-08-02',
    problem: String.raw`Find the number of positive integers $n \leq 2026$ such that $91 \mid n^2 + n + 1$.`,
  },
  {
    division: 2,
    date: '2026-08-03',
    problem: String.raw`Point $P$ lies inside square $ABCD$, whose vertices are labeled in order around the square. Given $PA = 5$, $PB = 8$, $PC = 13$, find the area of square $ABCD$.`,
  },
  {
    division: 2,
    date: '2026-08-04',
    problem: String.raw`A fair coin is flipped repeatedly. Find the probability that a run of $5$ consecutive heads occurs before a run of $4$ consecutive tails. The probability can be written as $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.`,
  },
  {
    division: 2,
    date: '2026-08-05',
    problem: String.raw`Find the number of ordered triples $(a, b, c)$ of positive integers such that $a + b + c = 2026$ and $a$, $b$, $c$ are the side lengths of a triangle with positive area.`,
  },
  {
    division: 2,
    date: '2026-08-06',
    problem: String.raw`Consider the $36$ points $(x, y)$ where $x$ and $y$ each range over $\{0, 1, 2, 3, 4, 5\}$, forming a $6 \times 6$ array of points. How many squares have all four vertices among these $36$ points? Squares tilted with respect to the axes count, not just the ones with horizontal and vertical sides.`,
  },
  {
    division: 2,
    date: '2026-08-07',
    problem: String.raw`Compute $\displaystyle\sum_{k=1}^{2024} \frac{1}{k\sqrt{k+1} + (k+1)\sqrt{k}}$. The value can be written as $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.`,
  },
]

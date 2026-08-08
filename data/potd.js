// Problem of the Day archive.
//
// To add a new problem, append an entry to the array below. Nothing else needs
// to change: the POTD page groups by `division` and sorts by `date` for you.
//
//   division: 1 (Advanced) or 2 (Beginner)
//   date:     ISO `YYYY-MM-DD`, parsed as a plain calendar date (no timezone shifts)
//   problem:  problem statement. Math goes between single `$` delimiters and is
//             rendered with KaTeX, e.g. 'Find $n$ such that $n^2 + n + 1 = 0$.'
//             Everything outside the `$` pairs is treated as plain text.
//
// Answers are intentionally not stored here — the page only displays problems.

export default [
  // ── Division 1 ──────────────────────────────────────────────────────────
  {
    division: 1,
    date: '2026-07-31',
    problem:
      'Find the number of ways to partition the set $\\{1, 2, 3, \\ldots, 15\\}$ into five disjoint triples $\\{a, b, c\\}$ such that in every triple, one element is the sum of the other two. The order of the five triples does not matter, and the order of elements within a triple does not matter.',
  },
  {
    division: 1,
    date: '2026-08-01',
    problem:
      'Let $S = \\{1, 2, 3, \\ldots, 10\\}$. Find the number of functions $f : S \\to S$ satisfying $f(f(x)) = f(x)$ for all $x \\in S$. Find the remainder when this number is divided by $1000$.',
  },
  {
    division: 1,
    date: '2026-08-02',
    problem:
      'Let $ABC$ be an acute triangle with $AB = 25$, $BC = 26$, and $CA = 17$, and let $\\omega$ be its circumcircle. The tangent to $\\omega$ at $B$ and the tangent to $\\omega$ at $C$ meet at a point $T$. Line $AT$ meets $\\omega$ again at $D \\neq A$. Let $M$ be the midpoint of $BC$. Line $AM$ meets $\\omega$ again at $N \\neq A$. The length $DN$ can be written as $\\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.',
  },
  {
    division: 1,
    date: '2026-08-03',
    problem:
      'A composition of a positive integer $n$ is an ordered sequence of positive integers summing to $n$. For example, $4$ has eight compositions: $4$, $3+1$, $1+3$, $2+2$, $2+1+1$, $1+2+1$, $1+1+2$, $1+1+1+1$. Across all $2^{2025}$ compositions of $2026$, let $T$ be the total number of parts equal to $1$, counted with multiplicity. (For $n = 4$ the eight compositions above contain $0, 1, 1, 0, 2, 2, 2, 4$ ones, so $T = 12$.) Find the remainder when $T$ is divided by $1000$.',
  },
  {
    division: 1,
    date: '2026-08-04',
    problem:
      'For a permutation $\\sigma = (\\sigma(1), \\sigma(2), \\ldots, \\sigma(10))$ of $\\{1, 2, \\ldots, 10\\}$, let $d(\\sigma)$ be the number of indices $i$ with $1 \\leq i \\leq 9$ and $\\sigma(i) > \\sigma(i+1)$. Compute $T = \\sum_{\\sigma} 2^{d(\\sigma)}$, the sum taken over all $10!$ permutations. Find the remainder when $T$ is divided by $1000$.',
  },
  {
    division: 1,
    date: '2026-08-05',
    problem:
      'Find the sum of $a + b$ over all ordered pairs $(a, b)$ of positive integers with $a \\leq 2026$ and $b \\leq 2026$ satisfying $ab \\mid a^2 + b^2 + 1$.',
  },
  {
    division: 1,
    date: '2026-08-06',
    problem:
      "An election has two candidates. Candidate A receives $1014$ votes and candidate B receives $506$ votes. The $1520$ ballots are counted one at a time in a uniformly random order. Find the probability that at every moment during the count, A's running total is strictly more than twice B's running total. The probability can be written as $\\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.",
  },
  {
    division: 1,
    date: '2026-08-07',
    problem:
      'Let $P(x)$ be the polynomial of degree $2026$ satisfying $P(k) = \\frac{1}{k}$ for every integer $k = 1, 2, 3, \\ldots, 2027$. The value $P(2028)$ can be written as $\\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.',
  },

  // ── Division 2 ──────────────────────────────────────────────────────────
  {
    division: 2,
    date: '2026-07-31',
    problem:
      'In triangle $ABC$, $AB = 21$, $BC = 20$, and $CA = 13$. The incircle $\\omega$ of triangle $ABC$ touches $BC$ at $X$. Line $AX$ meets $\\omega$ again at $Y \\neq X$. The length $XY$ can be written as $\\frac{a\\sqrt{b}}{c}$, where $a$, $b$, $c$ are positive integers, $\\gcd(a, c) = 1$, and $b$ is squarefree. Find $a + b + c$.',
  },
  {
    division: 2,
    date: '2026-08-01',
    problem:
      'Fifteen chairs are arranged in a circle and numbered $1$ through $15$ clockwise. A set $C$ of chairs is called spread if no two chairs in $C$ are close together around the circle, meaning that for any two distinct chairs $i, j \\in C$, $\\min(|i - j|, 15 - |i - j|) \\geq 3$. Counting the empty set as spread, find the total number of spread sets.',
  },
  {
    division: 2,
    date: '2026-08-02',
    problem: 'Find the number of positive integers $n \\leq 2026$ such that $91 \\mid n^2 + n + 1$.',
  },
  {
    division: 2,
    date: '2026-08-03',
    problem:
      'Point $P$ lies inside square $ABCD$, whose vertices are labeled in order around the square. Given $PA = 5$, $PB = 8$, $PC = 13$, find the area of square $ABCD$.',
  },
  {
    division: 2,
    date: '2026-08-04',
    problem:
      'A fair coin is flipped repeatedly. Find the probability that a run of $5$ consecutive heads occurs before a run of $4$ consecutive tails. The probability can be written as $\\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.',
  },
  {
    division: 2,
    date: '2026-08-05',
    problem:
      'Find the number of ordered triples $(a, b, c)$ of positive integers such that $a + b + c = 2026$ and $a$, $b$, $c$ are the side lengths of a triangle with positive area.',
  },
  {
    division: 2,
    date: '2026-08-06',
    problem:
      'Consider the $36$ points $(x, y)$ where $x$ and $y$ each range over $\\{0, 1, 2, 3, 4, 5\\}$, forming a $6 \\times 6$ array of points. How many squares have all four vertices among these $36$ points? Squares tilted with respect to the axes count, not just the ones with horizontal and vertical sides.',
  },
  {
    division: 2,
    date: '2026-08-07',
    problem:
      'Compute $\\sum_{k=1}^{2024} \\frac{1}{k\\sqrt{k+1} + (k+1)\\sqrt{k}}$. The value can be written as $\\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Find $m + n$.',
  },
]

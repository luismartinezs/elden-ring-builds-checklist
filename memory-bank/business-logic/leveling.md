these are leveling rules:

# glossary

V: vigor, M: mind, E: endurance, S: strength, D: dexterity, I: intelligence, F: faith, A: arcane
attack stats (X): S, D, I, F, A
util stats: V, M, E
sc: soft cap, sc1: soft cap 1, sc2: soft cap 2, ...
nsc: next soft cap
lsc: last soft cap
X: atk stats, X1, X2, ...
R: stat
th: two-handing weapon
playstyle:
- spellcaster: s
- melee: m
- ranged: r
- glasscannon: g
- tank: t


# How stats are defined

40V: raise vigor to 40
20X1: raise main attack stat to 20
30M: raise mind to 30
etc

# universal milestones

- meet R
- 20X1
- if X2: 20X2
- 40V
- 25E
- X1 to sc2
- if X2: X2 to sc2
- 58V
- X1 to lsc
- if X2: X2 to lsc
- 30E
- 40M
- 50E
- 50M

# playstyle notes

- default: well rounded stats V, E, M paired with X1, X2 in a balanced way, teh gist of it is to reach soft caps progressively for all utility stats plus the one or two attack stats
- spellcaster: raising M early to 40M, then to 50M. Put 20 in dex for casting speed
- FP user: same as spellcaster for mind, but without the casting speed
- melee: more weight on V and E first
- ranged: less weight on V. Use the extra points to reach 30E early (from 25E)
- glasscannon: focus on maximum dmg at expense of survival (V, E)
- tank: large focus on V and E (opposite of glasscannon)

# leveling paths

## Default / balanced

- meet R
- 20X1
- if X2: 20X2
- 40V
- 25E
- 16M (provide some baseline FP)
- 30E
- X1 to sc2
- if X2: X2 to sc2
- 58V
- X1 to lsc
- if X2: X2 to lsc
- 30E
- 40M
- 50E
- 50M

## spellcaster / FP user (ashes of war)

for a FP user we would ignore the increase in D to raise casting speed

Note: spellcasting is something that can be integrated in any build, basically all builds have two variants: spellcaster and non-spellcaster

- meet R
- 20X1
- 40V
- 40M
- 25E
- X1 to sc2
- if X2: X2 to sc2
- 50M
- X1 to lsc
- if X2: X2 to lsc
- 20D (only for casting speed)
- 58V
- 30D (only for casting speed)
- 50E
- 70D (only to max casting speed)

# Melee

Put emphasis on survival, needs V and E

Here we consider melee not-caster

- meet R
- 20X1
- if X2: 20X2
- 40V
- 30E
- X1 to sc2
- if X2: X2 to sc2
- 58V
- X1 to lsc
- if X2: X2 to lsc
- 40M
- 50E
- 50M

## ranged

deprioritize V in favor of E and attack stats

Here we consider ranged not-caster

- meet R
- 20X1
- if X2: 20X2
- 25V
- 25E
- 40V
- 30E
- X1 to sc2
- if X2: X2 to sc2
- 50E
- X1 to lsc
- if X2: X2 to lsc
- 58V
- 50M

## glass cannon

extremely deprioritize V and focus on damage

consider non-spellcaster

- meet R
- 20X1
- if X2: 20X2
- X1 to sc2
- if X2: X2 to sc2
- X1 to lsc
- if X2: X2 to lsc
- 30E
- 40M
- 40V
- 50E
- 50M
- 58V

## tank

deprioritize damage, focus on survival

- meet R
- 40V
- 25E
- 20X1
- if X2: 20X2
- 58V
- 30E
- 40M
- X1 to sc2
- if X2: X2 to sc2
- 50E
- 50M
- X1 to lsc
- if X2: X2 to lsc

# rules for each stat

- V (40/58): always 40V, go to 58V if melee / survival build
- M (40/50): if use FP (spells or ashes of war), take it to 40M, then to 50M
- E (25) (30/50): spellcaster: leave at 25E. Otherwise take to 30E, then 50E
- attack stats: they all assume you use them in your build, otherwise ignore unless stated. All attack stats follow this baseline pattern: 20X asap, then raise util stats, then back to X, hitting soft caps progressively.
- S (20/35/53/-80): 20S asap. then, raise util stats, then back to 35S -> 53S. If th, 80S
- D (20/53) (20/30): 20D asap. then util, then 53. If spellcaster, 20D and then 30D for casting speed (low priority)
- I (20/50/80): 20I asap, then util, then 50I, then 80I
- F (20/50/80): same as I
- A (20/45): 20A asap, then util, then 45A

- generally speaking, a build is "complete" when the last soft cap for X is reached, after which points are added to secondary utility stats (for example adding more M to a melee non-caster build), but we could in practice stop leveling up stats at this point

# Speed casting D caps

- 70D hard cap
- 60D soft cap
- radagon icon: +30 virtual D
- azur staff: +40 virtual D
- i.e. radagon icon + 30D = 60 virtual D
import random

"""
Given n numbers as well as n probabilities that sum up to 1,
generate one of the numbers with its corresponding probability.

input: correspondingProbs(vals=[1, 2, 3, 4], probs=[0.1, 0.5, 0.2, 0.2])
output: 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.
"""

def correspondingProb(vals, probs):
  val = random.random()

  prev = 0
  for i in range(0, len(probs)):
    if (val > prev) and (val < (probs[i]+prev)):
      return vals[i]
    prev += probs[i]


def verify(vals, probs):
  if (len(vals) != len(probs)) or len(vals)==0 or len(probs)==0:
    return "Invalid inputs"

  for i in range(len(vals)):
    print("{} should be returned {}% of times".format(vals[i], probs[i]*100))

  count = [0 for x in range(len(vals))]
  for _ in range(100000):
    i = vals.index(correspondingProb(vals, probs))
    count[i] += 1

  print()
  print("After 100000 loops counting probabilities:")
  for i in range(len(count)):
    print("{} has a {}% chance of being returned".format(vals[i], count[i]/1000))

verify([1, 2, 3, 4], [.1, .5, .2, .2])



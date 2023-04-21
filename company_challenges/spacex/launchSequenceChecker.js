// The master launch sequence consists of several independent sequences for different systems. Your goal is to verify that all the individual system sequences are in strictly increasing order. In other words, for any two elements i and j (i < j) of the master launch sequence that belong to the same system (having systemNames[i] = systemNames[j]), their values should be in strictly increasing order (i.e. stepNumbers[i] < stepNumbers[j]).

// Example

// For systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"] and stepNumbers = [1, 10, 11, 2, 12, 111], the output should be
// solution(systemNames, stepNumbers) = true.

// There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [1, 2], [10, 12], and [11, 111], respectively. The elements are in strictly increasing order for all three.

// For systemNames = ["stage_1", "stage_1", "stage_2", "dragon"] and stepNumbers = [2, 1, 12, 111], the output should be
// solution(systemNames, stepNumbers) = false.

// There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [2, 1], [12], and [111], respectively. In the first sequence, the elements are not ordered properly.

function solution(systemNames, stepNumbers) {
  let clusteredSystems = {};

  // We group the respective numbers to each system
  for (let i = 0; i < systemNames.length; i++) {
    let currentSystem = systemNames[i];
    let currentStep = stepNumbers[i];
    if (!(currentSystem in clusteredSystems)) {
      clusteredSystems[currentSystem] = [currentStep];
    } else {
      clusteredSystems[currentSystem].push(currentStep);
    }
  }

  for (let key in clusteredSystems) {
    if (clusteredSystems[key].length > 1) {
      for (let i = 1; i < clusteredSystems[key].length; i++) {
        // We validate if the previous index is greater than the current one
        if (clusteredSystems[key][i] <= clusteredSystems[key][i - 1]) {
          return false;
        }
      }
    }
  }

  return true;
}

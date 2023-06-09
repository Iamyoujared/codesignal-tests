// SpaceX has built a reliable Earth-Mars communication system that uses n links to transmit messages that are broken into fragments. The messages are sequences of ASCII characters that terminate with '#'. n copies of each fragment are sent, meaning that normally n copies of each fragment are received (one per link). However, some fragments may be lost. It's also possible that they can be corrupted or arrive out of order.

// Each fragment contains the following data:

// seq - The sequential number of the fragment in the message. This part of the fragment is never corrupted.
// fragmentData - A single character from the message contained in the fragment.
// Implement a function that receives an array of message fragments and reconstructs the original message according to the following rules:

// For each sequential number, pick the data character that is present in more than 50% of the fragments with that sequential number. Note that we calculate 50% based on the total number of copies that were sent (which is always equal to n), while the number of received fragments can be smaller.
// The last fragment of the message that's been reconstructed according to rule 1 (and no other fragment) contains '#'.
// There can be no gaps in the message, so all of the fragments numbered 0, 1, 2, ..., <number of the last fragment> should be restored.
// If the message cannot be reconstructed, return an empty string. Otherwise, return the reconstructed message.

// Example

// For seq = [1, 1, 0, 0, 0, 2, 2, 2], fragmentData = ['+', '+', 'A', 'A', 'B', '#', '#', '#'], and n = 3, the output should be
// solution(seq, fragmentData, n) = "A+#".

// For the fragment with index 0 (sequential number), 2 'A's and 1 'B' were received. So, the number of fragments with 'A' is more than 50% out of n = 3. Both parts of rule 1 hold, meaning that the initial character of the message is 'A'.
// For the fragment with index 1 (sequential number), 2 '+'s were received and the third fragment was lost. Again, the number of fragments with '+' is more than 50% out of n = 3. Therefore, the next character of the message is '+'.
// For the fragment with index 2 (sequential number), 3 '#'s were received. All the sent fragments agree, so rule 1 holds. There are no fragments with a sequential number of more than 2, meaning that this is the last character. Since this character is '#', rule 2 holds as well.
// Note that there were no gaps before '#', so rule 3 holds. Hence, the message can be considered correctly reconstructed.

function solution(seq, fragmentData, n) {
  map = [];
  mess = [];
  max = 0;
  for (i in seq) {
    frag = seq[i];
    if (frag > max) max = frag;
    data = fragmentData[i];
    if (!map[frag]) {
      map[frag] = {};
    }
    if (!map[frag][data]) {
      map[frag][data] = 1;
    } else {
      map[frag][data]++;
    }
    if (map[frag][data] > n / 2) {
      mess[frag] = data;
    }
  }
  error = 0;
  for (i = 0; i < max; i++) {
    if (!mess[i] || (i + 1 < mess.length && mess[i] == "#")) error = 1;
  }
  return error ? "" : mess.join``;
}

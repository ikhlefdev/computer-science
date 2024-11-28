export function AllValidMoves([x, y]) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  let ValidMoves = [];
  for (let i = 0; i < moves.length; i++) {
    let newX = moves[i][0] + x;
    let newY = moves[i][1] + y;
    if (newX > 0 && newX < 8 && newY > 0 && newY < 8)
      ValidMoves.push([newX, newY]);
  }
  return ValidMoves;
}
export function knightsMove(start, end) {
  const queue = [start];
  const visited = new Set();
  const parent = new Map();

  visited.add(start.toString());

  while (queue.length > 0) {
    const current = queue.shift(); // Get next position to process

    // Check if we reached target
    if (current[0] === end[0] && current[1] === end[1]) {
      return reconstructPath(parent, start, end);
    }
    const validMoves = AllValidMoves(current);
    
    // Process each valid move
    for (const move of validMoves) {
      const moveStr = move.toString();
      if (!visited.has(moveStr)) {
        visited.add(moveStr);
        queue.push(move);
        parent.set(moveStr, current); // Store move's parent for path reconstruction
        
      }
    }
  }
  return null; // No path found
}
// Reconstructs path from parent map
function reconstructPath(parent, start, end) {
    const path = [end];
    let current = end;
    let num=0
    // Work backwards from end to start using parent map
    while(current[0] !== start[0] || current[1] !== start[1]) {
      current = parent.get(current.toString());
      path.unshift(current);
      num++
    }
    // Format each position as [x,y]
    const formattedPath = path.map(pos => `[${pos[0]},${pos[1]}]`);
    
    return console.log(`You made it in ${num-1} moves! here is your path:\n ${formattedPath.join(' -> ')}`);
   }

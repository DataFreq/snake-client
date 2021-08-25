let connection;

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = key => {
  if (key.match('\u0003'))
    process.exit();

  if (key.match('w') || key.match('W'))
    connection.write('Move: up')

  if (key.match('a') || key.match('A'))
    connection.write('Move: left')

  if (key.match('s') || key.match('S'))
    connection.write('Move: down')
    
  if (key.match('d') || key.match('D'))
    connection.write('Move: right')

};

module.exports = setupInput;
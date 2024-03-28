const { exec } = require('child_process');

// Function to execute shell commands
const executeCommand = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
};

// Run npm dedupe
executeCommand('npm dedupe');

// Additional commands can be added here to further optimize the project
// For example, pruning dev dependencies (if not needed)
// executeCommand('npm prune --production');

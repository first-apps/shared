const { execSync } = require("child_process");

try {
  console.log("Building components...");
  execSync("npm run build:lib", { cwd: "./components", stdio: "inherit" });

  console.log("Building utils...");
  execSync("npm run build:lib", { cwd: "./utils", stdio: "inherit" });

  console.log("Build completed!");
} catch (error) {
  console.error("Build failed:", error.message);
  process.exit(1);
}

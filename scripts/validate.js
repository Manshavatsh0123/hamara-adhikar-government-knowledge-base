const fs = require("fs");
const path = require("path");

const { SchemeSchema } = require("../schema/scheme.schema");

const SCHEMES_DIR = path.join(__dirname, "../schemes");

let totalFiles = 0;
let passedFiles = 0;
let failedFiles = 0;


console.log("Starting Scheme Validation...");

const files = fs
  .readdirSync(SCHEMES_DIR)
  .filter((file) => file.endsWith(".json"));

totalFiles = files.length;

for (const file of files) {
  const filePath = path.join(SCHEMES_DIR, file);

  try {
    const rawData = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(rawData);

    const result = SchemeSchema.safeParse(jsonData);

    if (result.success) {
      console.log(`PASS : ${file}`);
      passedFiles++;
    } else {
      console.log(`\n FAIL : ${file}`);
      failedFiles++;

      result.error.issues.forEach((issue, index) => {
        console.log(`\n${index + 1}. Error`);

        console.log(
          `   Field      : ${issue.path.join(" -> ")}`
        );

        console.log(
          `   Message    : ${issue.message}`
        );

        console.log(
          `   Code       : ${issue.code}`
        );
      });

      console.log("----------------------------------------");
    }
  } catch (err) {
    failedFiles++;

    console.log(`\n ERROR : ${file}`);
    console.log(err.message);
    console.log("----------------------------------------");
  }
}


console.log("Validation Summary");

console.log(`Total Files : ${totalFiles}`);
console.log(`Passed      : ${passedFiles}`);
console.log(`Failed      : ${failedFiles}`);

if (failedFiles === 0) {
  console.log("\n All scheme files are valid.");
} else {
  console.log("\n Some files contain validation errors.");
}
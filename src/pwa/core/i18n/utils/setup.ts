import { runCommand } from "@/shared/scripts";

async function main() {
  try {
    // Export JSON Locale
    await runCommand("tsx src/pwa/core/i18n/utils/exportJSONLocales.ts");

    // Export Resources Interface
    await runCommand("tsx src/pwa/core/i18n/utils/exportResourcesInterface.ts");

    // Export Resources Constant
    await runCommand("tsx src/pwa/core/i18n/utils/exportResources.ts");

    process.exit(0);
  } catch (error: any) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

main();

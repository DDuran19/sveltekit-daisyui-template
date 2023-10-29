import { command } from 'execa';
import readline from 'readline';

async function createSvelteKitDaisyUI() {
	try {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		rl.question('Enter the project name (leave blank for default): ', async (projectName) => {
			const sanitizedProjectName = projectName.trim() || 'sveltekit-daisy-ui';

			// Run the necessary shell commands to set up the project
			await command(
				`npx degit https://github.com/DDuran19/sveltekit-daisyui-template ${sanitizedProjectName}`
			);
			await command(`cd ${sanitizedProjectName}`);

			console.log(
				'SvelteKit Daisy UI template created successfully! run `npm install` (could also be `yarn` or `pnpm`) to install dependencies.'
			);
			rl.close();
		});
	} catch (error) {
		console.error('Error creating SvelteKit Daisy UI template:', error);
	}
}

createSvelteKitDaisyUI();

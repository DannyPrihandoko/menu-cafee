import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { run } from 'vite-plugin-run';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),

        {
            name: 'wayfinder-generator',
            // This runs before the build starts in production mode
            buildStart() {
                console.log('Generating Wayfinder TypeScript files for production build...');
                try {
                    execSync('php artisan wayfinder:generate', {
                        stdio: 'inherit',
                    });
                    console.log('Wayfinder generation complete.');
                } catch (error) {
                    console.error('Error generating Wayfinder files:', error);
                    throw error; // Fail the build if generation fails
                }
            },
        },

        run([
            {
                name: 'wayfinder',
                run: ['php', 'artisan', 'wayfinder:generate'],
                pattern: ['routes/**/*.php', 'app/**/Http/**/*.php'],
            },
        ]),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
});

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/theme-color-changer.js'],
            refresh: true,
        }),
    ],
});

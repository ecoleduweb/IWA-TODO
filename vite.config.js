import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '#components': path.resolve(__dirname, './src/components'),
            '#style': path.resolve(__dirname, './src/style'),
            '#layout': path.resolve(__dirname, './src/layout'),
            '#types': path.resolve(__dirname, './src/types'),
            '#composables': path.resolve(__dirname, './src/composables'),
            '#assets': path.resolve(__dirname, './src/assets'),
        },
    },
});

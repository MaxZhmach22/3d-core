import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: '3d-core-lib',
            fileName: '3d-core-lib'
        },
        rollupOptions: {
            external: ['three', 'lil-gui', 'gsap', ],
            output:  {
                globals: {
                    three: 'THREE',
                    'lil-gui': 'GUI',
                    gsap: 'gsap',
                },
            },
        },
    },
    plugins: [dts()],
    server: {
        port: 3333
    }
});

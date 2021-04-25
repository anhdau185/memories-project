import path from 'path';

export default {
    presets: ['@babel/preset-env'],
    plugins: [
        [
            'module-resolver',
            {
                root: [path.resolve('./src')]
            }
        ]
    ]
};

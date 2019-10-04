const path = require('path');

module.exports = {
    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/components/'),
            containers: path.resolve(__dirname, '../src/containers/'),
            src: path.resolve(__dirname, '../src/'),
            static: path.resolve(__dirname, '../static/'),
            actions: path.resolve(__dirname, '../src/actions'),
            reducers: path.resolve(__dirname, '../src/reducers/'),
            selectors: path.resolve(__dirname, '../src/selectors/'),
            utils: path.resolve(__dirname, '../src/utils/'),
            types: path.resolve(__dirname, '../src/types/'),
            sagas: path.resolve(__dirname, '../src/sagas/'),
            lib: path.resolve(__dirname, '../src/lib/'),
            services: path.resolve(__dirname, '../src/services/'),
            'constants.ts': path.resolve(__dirname, '../src/constants.ts'),
            '_vars.scss': path.resolve(__dirname, '../src/_vars.scss')
        }
    }
};

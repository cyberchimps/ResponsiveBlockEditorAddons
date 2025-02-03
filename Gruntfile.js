module.exports = function( grunt ) {
    'use strict';

    const pkg = grunt.file.readJSON( 'package.json' );

    grunt.initConfig( {

        pkg,

        clean: {
            build: [ 'build/' ],
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: [
                            '!**/*.{ai,eps,psd}',
                            'LICENSE',
                            'class-' + pkg.name + '.php',
                            'admin/**',
                            'dist/**',
                            'includes/**',
                            'helper/**',
                            'assets/**',
                            'readme.txt',
                            'src/**',
                            '!**/*.css.map',
                            '!**/*.js.map',
                            'responsive-block-editor-addons.php',
                            'classes/**',
                            'analytics/**',
                        ],
                        dest: 'build/<%= pkg.name %>',
                    },
                ],
            },
        },

        compress: {
            responsive_block_editor_addons: {
                options: {
                    archive: 'build/responsive-block-editor-addons.zip',
                },
                files: [
                    {
                        cwd: 'build/<%= pkg.name %>/',
                        dest: '<%= pkg.name %>/',
                        src: [ '**' ],
                    },
                ],
            },
        },

        replace: {
            php: {
                src: [
                    'class-' + pkg.name + '.php',
                    'includes/**/*.php',
                ],
                overwrite: true,
                replacements: [
                    {
                        from: /Version:(\s*?)[a-zA-Z0-9\.\-\+]+$/m,
                        to: 'Version:$1' + pkg.version,
                    },
                    {
                        from: /@since(.*?)NEXT/mg,
                        to: '@since$1' + pkg.version,
                    },
                    {
                        from: /Version:(\s*?)[a-zA-Z0-9\.\-\+]+$/m,
                        to: 'Version:$1' + pkg.version,
                    },
                    {
                        from: /Tested up to:(\s*?)[a-zA-Z0-9\.\-\+]+$/m,
                        to: 'Tested up to:$1' + pkg.tested_up_to,
                    },
                ],
            },
            readme: {
                src: 'readme.*',
                overwrite: true,
                replacements: [
                    {
                        from: /^(\*\*|)Stable tag:(\*\*|)(\s*?)[a-zA-Z0-9.-]+(\s*?)$/mi,
                        to: '$1Stable tag:$2$3<%= pkg.version %>$4',
                    },
                    {
                        from: /Tested up to:(\s*?)[a-zA-Z0-9\.\-\+]+$/m,
                        to: 'Tested up to:$1' + pkg.tested_up_to,
                    },
                ],
            },
            tests: {
                src: '.dev/tests/phpunit/**/*.php',
                overwrite: true,
                replacements: [
                    {
                        from: /\'version\'(\s*?)\=\>(\s*?)\'(.*)\'/,
                        to: '\'version\' \=\> \'<%= pkg.version %>\'',
                    },
                ],
            },
            languages: {
                src: 'languages/responsive-block-editor-addons.pot',
                overwrite: true,
                replacements: [
                    {
                        from: /(Project-Id-Version: Responsive Block Editor Addons )[0-9\.]+/,
                        to: '$1' + pkg.version,
                    },
                ],
            },
        },

        shell: {
            build: [ 'npm run build' ].join( ' && ' ),
            translations: [ 'npm run makepot' ].join( ' && ' ),
        },

    } );

    require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

    grunt.registerTask( 'build', [ 'shell:build', 'update-pot', 'replace', 'clean:build', 'copy:build', 'compress' ] );
    grunt.registerTask( 'test', [ 'shell:build', 'update-pot', 'replace' ] );
    grunt.registerTask( 'update-pot', [ 'replace:languages' ] );
    grunt.registerTask( 'version', [ 'replace' ] );
};

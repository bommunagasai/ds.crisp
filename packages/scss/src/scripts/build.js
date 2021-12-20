const Fs = require('fs')
const Path = require('path')
const Sass = require('node-sass')

const getComponents = () => {
    let allComponents = []

    const types = ['atoms', 'molecules']

    types.forEach(type => {
        const allFiles = Fs.readdirSync(`src/${type}`).map(file => ({
            input: `src/${type}/${file}`,
            output: `lib/${file.slice(0, -4) + 'css'}`
        }))

        allComponents = [
            ...allComponents,
            ...allFiles
        ]
    })

    return allComponents
}

const compile = (path, fileName) => {
    const result = Sass.renderSync({
        data: Fs.readFileSync(
            Path.resolve(path)
        ).toString(),
        outputStyle: 'expanded',
        includePaths: [Path.resolve('src')]
    })

    Fs.writeFileSync(
        Path.resolve(fileName),
        result.css.toString()
    )    
}

copyRecursiveSync = (src, dest) =>  {
    const exists = Fs.existsSync(src);
    const stats = exists && Fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        const destExists = Fs.existsSync(dest);
        if (!destExists) Fs.mkdirSync(dest);
        Fs.readdirSync(src).forEach(function(childItemName) {
            copyRecursiveSync(Path.join(src, childItemName),
                            Path.join(dest, childItemName));
        });
    } else {
      Fs.copyFileSync(src, dest);
    }
  };

try {
    Fs.mkdirSync(Path.resolve('lib'))
    Fs.mkdirSync(Path.resolve('lib/assets'))
} catch(e) {}

compile('src/global.scss', 'lib/global.css')

getComponents().forEach(component => {
    compile(component.input, component.output)
})

copyRecursiveSync('src/assets', 'lib/assets');
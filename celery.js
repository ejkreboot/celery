import chalk from 'chalk';
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

export function Log(...a) {
    const debug = process.env.CELERY_DEBUG || false;
    const trace = new Error().stack.split("\n");
    const line = trace[2].replace(/.*\/(.+)\)$/, "$1");
    let m = [];
    m = m.concat(a);
    m = m.map(e => JSON.stringify(e)).join(", ")
    if(debug) { 
        console.log(chalk.bold.magenta("(" + line + ") ") + chalk.cyan(m))
    }
}

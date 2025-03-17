const _isGlob = require('is-glob');
const {glob} = require('glob');

async function expandExpression(args) {
    // resolve glob expressions async
    const resolvedExpressions = await Promise.all(args.map(async expr => {
        // glob expression ?
        if (_isGlob(expr)){
            // expand expression
            const files = await glob(expr, {});
            return files;

        // passthrough (e.g. bash/zsh automatically expand glob expressions)
        }else{
            return Promise.resolve(expr);
        }
    }));

    return resolvedExpressions.flat(resolvedExpressions.length);
}

module.exports = {
    expand: expandExpression
}

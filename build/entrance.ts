let isModule = false;

try {
  isModule = HTMLScriptElement.supports('module');
} catch {
  isModule = false;
}

const main = function () {
  if (isModule) {
    return;
  }
};

main();

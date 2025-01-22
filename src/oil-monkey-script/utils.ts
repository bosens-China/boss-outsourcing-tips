export function createScript(
  rest: Partial<HTMLScriptElement>,
): Promise<HTMLScriptElement> {
  return new Promise<HTMLScriptElement>((resolve) => {
    const script = document.createElement('script');
    Object.entries(rest).forEach(([key, value]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (script as any)[key] = value;
    });
    script.onload = () => {
      resolve(script);
    };
    document.body.appendChild(script);
  });
}

export function createStyle({ href }: { href: string }) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.body.appendChild(link);
  return link;
}

export function isSupportModule() {
  let isModule = false;

  try {
    isModule = HTMLScriptElement.supports('module');
  } catch {
    isModule = false;
  }
  return isModule;
}

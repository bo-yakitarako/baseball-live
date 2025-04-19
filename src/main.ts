const TICK = 50;

(async () => {
  const dom = {
    title: null as never as HTMLHeadingElement,
    header: null as never as HTMLHeadElement,
    section: null as never as HTMLDivElement,
  };
  let loadingTime = 0;
  while (Object.values(dom).some((v) => v === null)) {
    await new Promise((resolve) => setTimeout(resolve, TICK));
    loadingTime += TICK;
    if (loadingTime > 5000) {
      return;
    }
    if (dom.title === null) {
      dom.title = document.querySelector('[class^="watch_title_"]') as HTMLHeadingElement;
    }
    if (dom.header === null) {
      dom.header = document.querySelector('[class^="Header_header_"]') as HTMLHeadElement;
    }
    if (dom.section === null) {
      dom.section = document.querySelector('#sub-header') as HTMLDivElement;
    }
  }
  const toggleDelete = (isDelete: boolean) => {
    const style = isDelete ? 'none' : 'block';
    dom.header.style.setProperty('display', style);
    dom.section.style.setProperty('display', style);
    window.scrollTo(0, 0);
  };
  toggleDelete(true);
})();

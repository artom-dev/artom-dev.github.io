/* A short entrance, no looping animation or tracking. */
(()=>{
  const section=document.querySelector('.ads-showcase');
  if(!section)return;
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const reveal=()=>{if(!motion.matches)section.classList.add('ads-enter');};
  if(!motion.matches&&'IntersectionObserver' in window){
    observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){reveal();observer.disconnect();}
    },{threshold:.15});
    observer.observe(section);
  }
  motion.addEventListener('change',()=>{
    if(motion.matches){observer?.disconnect();section.classList.remove('ads-enter');}
  });
})();

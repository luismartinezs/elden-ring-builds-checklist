// Run this in the browser console to populate local storage with legacy data and then refresh page to check whether migration works
const populateLegacyData = () => {
  const legacyData = {
    'filter-somber-stone-bell': true,
    'filter-seluvis-questline': true,
    'filter-smithing-stone-bell': true,
    'filter-varre-questline': true,
    'filter-ghost-glovewort-bell': true,
    'lightning-lancer': JSON.stringify(["97126841-4863-4941-b31d-66027ad3ac6c", "19781926-0f7b-49c1-b990-f2413a937ac4", "dab9a1aa-00fe-44e1-90ab-4477faf97507"]),
    'filter-ranni-questline': true,
  };
  Object.entries(legacyData).forEach(([key, value]) => {
    localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value.toString());
  });
};
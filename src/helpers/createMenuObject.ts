type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
  const menuObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu) {
    menuObject[activeMenu] = true;
  }

  return menuObject;
};

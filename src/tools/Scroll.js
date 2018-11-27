export const getScroll = () => {
    const scrollMax = document.body.clientHeight - window.innerHeight;
    const scrollY = window.scrollY;
    const scroll = scrollY / scrollMax;
    return scroll;
};

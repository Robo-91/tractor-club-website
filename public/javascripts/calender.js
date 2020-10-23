const buttonTime = document.getElementById('getTime');

const getTime = () => {
    return new Date();
};

console.log(getTime().getSeconds());

buttonTime.addEventListener('click', getTime);
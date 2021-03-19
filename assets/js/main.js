const today = new Date();
const dateString = today.getDate().toString() + today.getUTCMonth().toString() + today.getFullYear().toString();

function toggleCheckedTip(id) {
    const tip = document.getElementById(id);
    const check = tip.querySelector('.tip__check');
    const checkedClass = 'tip__checked';
    const hiddenClass = 'opacity-0';

    const input = document.getElementById(id + '__input')
    if (input && input.checked) {
        tip.classList.add(checkedClass)
        check.classList.remove(hiddenClass);
        localStorage.setItem(dateString + id, 'checked');
    } else {
        tip.classList.remove(checkedClass)
        check.classList.add(hiddenClass);
        localStorage.removeItem(dateString + id)
    }
}

function checkLocalstorage() {
    document.querySelectorAll('.tip').forEach(tip => {
        const id = tip.getAttribute('id');
        if (localStorage.getItem(dateString + id) === 'checked') {
            document.getElementById(id + '__input').checked = true;
            toggleCheckedTip(id);
        }
    })
}

checkLocalstorage();
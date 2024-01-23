// script.js
let currentUser;
let timer;

const accountsContainer = document.getElementById('accounts-container');
const loginForm = document.querySelector('.login-form');
const loginBtn = document.getElementById('login-btn');

const transferForm = document.querySelector('.transfer-form');
const transferBtn = document.getElementById('transfer-btn');

const loanForm = document.querySelector('.loan-form');
const loanBtn = document.getElementById('loan-btn');
transferForm.style.display = 'none';
loanForm.style.display = 'none';
// Example accounts
const accounts = [
    {
        owner: 'Phong',
        movements: [200, 1000, 2000, -400, 70],
        interestRate: 1.8,
        pin: 1111
    },
    {
        owner: 'Nguyen',
        movements: [500, 300, 1000, 600],
        interestRate: 1.4,
        pin: 2222
    },
    {
        owner: 'Viet',
        movements: [300, -300, 2000, 700],
        interestRate: 0.4,
        pin: 2222
    }
];

// Display login form initially
loginForm.style.display = 'block';

loginBtn.addEventListener('click', logIn);

function logIn() {
    const usernameInput = document.getElementById('username');
    const pinInput = document.getElementById('pin');

    const username = usernameInput.value;
    const pin = pinInput.value;

    const user = accounts.find(account => account.owner === username && account.pin === parseInt(pin));

    if (user) {
        currentUser = user;
        displayAccounts();
        startLogoutTimer();
    } else {
        alert('Incorrect username or PIN. Please try again.');
    }

    // Clear input fields
    usernameInput.value = '';
    pinInput.value = '';
}

function displayAccounts() {
    loginForm.style.display = 'none';
    accountsContainer.style.display = 'flex';

    // Clear existing accounts
    accountsContainer.innerHTML = '';

    // Display user account
    displayAccount(currentUser);

    
    transferForm.style.display = 'block';
    loanForm.style.display = 'block';
    // Display other accounts
    accounts.filter(account => account !== currentUser).forEach(account => displayAccount(account));

    // Display buttons for additional functionalities
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    const transferBtn = document.createElement('button');
    transferBtn.classList.add('btn');
    transferBtn.textContent = 'Transfer Money';
    transferBtn.addEventListener('click', transferMoney);

    const loanBtn = document.createElement('button');
    loanBtn.classList.add('btn');
    loanBtn.textContent = 'Request Loan';
    loanBtn.addEventListener('click', requestLoan);

    const sortBtn = document.createElement('button');
    sortBtn.classList.add('btn');
    sortBtn.textContent = 'Sort Movements';
    sortBtn.addEventListener('click', sortMovements);

    const closeAccountBtn = document.createElement('button');
    closeAccountBtn.classList.add('btn');
    closeAccountBtn.textContent = 'Close Account';
    closeAccountBtn.addEventListener('click', closeAccount);

    buttonsContainer.appendChild(transferBtn);
    buttonsContainer.appendChild(loanBtn);
    buttonsContainer.appendChild(sortBtn);
    buttonsContainer.appendChild(closeAccountBtn);

    accountsContainer.appendChild(buttonsContainer);
}

function displayAccount(account) {
    const accountElement = document.createElement('div');
    accountElement.classList.add('account');

    const ownerHeading = document.createElement('h2');
    ownerHeading.textContent = account.owner;

    const transactionsList = document.createElement('ul');
    transactionsList.classList.add('transactions');

    account.movements.forEach(movement => {
        const transactionItem = document.createElement('li');
        transactionItem.classList.add('transaction');
        transactionItem.textContent = `${movement} €`;
        transactionsList.appendChild(transactionItem);
    });

    const balanceElement = document.createElement('p');
    balanceElement.classList.add('balance');
    balanceElement.textContent = `Balance: ${calculateBalance(account.movements)} €`;

    accountElement.appendChild(ownerHeading);
    accountElement.appendChild(transactionsList);
    accountElement.appendChild(balanceElement);

    accountsContainer.appendChild(accountElement);
}

function calculateBalance(movements) {
    return movements.reduce((acc, movement) => acc + movement, 0);
}

function startLogoutTimer() {
    clearInterval(timer);

    let timeLeft = 300; // 5 minutes
    const logoutTimer = document.createElement('p');
    logoutTimer.classList.add('logout-timer');
    accountsContainer.appendChild(logoutTimer);

    timer = setInterval(() => {
        timeLeft--;
        logoutTimer.textContent = `Logout in ${formatTime(timeLeft)}`;

        if (timeLeft === 0) {
            clearInterval(timer);
            logOut();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Khi đăng xuất, ẩn các form
function logOut() {
    clearInterval(timer);
    currentUser = undefined;
    loginForm.style.display = 'block';
    accountsContainer.style.display = 'none';

    // Ẩn form chuyển tiền và vay tiền
    transferForm.style.display = 'none';
    loanForm.style.display = 'none';

    alert('You have been logged out.');
}

function transferMoney() {
    const recipientNameInput = document.getElementById('recipient-name');
    const amountInput = document.getElementById('amount');

    const recipientName = recipientNameInput.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const recipient = accounts.find(account => account.owner === recipientName);

    if (!recipient) {
        alert('Recipient not found.');
        return;
    }

    const confirmTransfer = confirm(`Transfer ${amount} € to ${recipientName}?`);

    if (confirmTransfer) {
        currentUser.movements.push(-amount);
        recipient.movements.push(amount);
        displayAccounts();
    }

    // Clear input fields
    recipientNameInput.value = '';
    amountInput.value = '';
}

function requestLoan() {
    const amountInput = document.getElementById('loan-amount');
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid loan amount.');
        return;
    }

    const depositThreshold = 0.1 * calculateBalance(currentUser.movements);

    if (amount <= depositThreshold) {
        alert('Loan request approved!');
        currentUser.movements.push(amount);
        displayAccounts();
    } else {
        alert('Loan request denied. Insufficient deposit for loan amount.');
    }

    // Clear input field
    amountInput.value = '';
}

function sortMovements() {
    const confirmSort = confirm('Do you want to sort movements?');

    if (confirmSort) {
        currentUser.movements.sort((a, b) => a - b);
        displayAccounts();
    }
}

function closeAccount() {
    const confirmClose = confirm('Are you sure you want to close your account?');

    if (confirmClose) {
        accounts.splice(accounts.indexOf(currentUser), 1);
        logOut(); // Log out after closing the account
    }
}

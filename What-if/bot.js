const bot = function () {

    localStorage.setItem('dimas', false);
    localStorage.setItem('simon', false);
    localStorage.setItem('martin', false);
    localStorage.setItem('cosplay', false);

    const peekobot = document.getElementById('peekobot');
    const container = document.getElementById('peekobot-container');

    const thread = document.getElementById('thread');

    const sleep = function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const scrollContainer = function () {
        container.scrollTop = container.scrollHeight;
    };

    const insertNewChatItem = function (elem) {
        container.insertBefore(elem, peekobot);
        // scrollContainer();
        elem.classList.add('activated');
    };

    const printResponse = async function (step) {
        const response = document.createElement('div');
        response.classList.add('chat-response');
        response.innerHTML = step.text;
        insertNewChatItem(response);

        await sleep(1500);

        if (step.options) {
            const choices = document.createElement('div');
            choices.classList.add('choices');
            step.options.forEach(function (option) {
                const button = document.createElement(option.url ? 'a' : 'button');
                button.classList.add('choice');
                button.innerHTML = option.text;
                if (option.url) {
                    button.href = option.url;
                } else {
                    button.dataset.next = option.next;
                    button.dataset.data = option.data;
                    if (option.thread) {
                        button.dataset.image = option.thread.image;
                    }
                }
                choices.appendChild(button);
            });
            insertNewChatItem(choices);
        } else if (step.next) {
            printResponse(chat[step.next]);
        }
    };

    const printChoice = function (choice) {
        const choiceElem = document.createElement('div');
        choiceElem.classList.add('chat-ask');
        choiceElem.innerHTML = choice.innerHTML;
        insertNewChatItem(choiceElem);
    };

    const disableAllChoices = function () {
        const choices = document.querySelectorAll('.choice');
        choices.forEach(function (choice) {
            choice.disabled = 'disabled';
        });
        return;
    };

    const handleChoice = async function (e) {
        if (!e.target.classList.contains('choice') || 'A' === e.target.tagName) {
            return;
        }

        e.preventDefault();
        const choice = e.target;

        if (choice.dataset.data === 'passer-par-la-boutique-de-manga') {
            localStorage.setItem('dimas', true);
        }
        if (choice.dataset.data === 'accepter-de-suivre-simon') {
            localStorage.setItem('simon', true);
        }
        if (choice.dataset.data === 'passer-la-nuit-avec-martin') {
            localStorage.setItem('martin', true);
        }
        if (choice.dataset.data === 'travailler-sur-le-costume-pour-le-concours-de-cosplay-de-la-japan-en-juillet') {
            localStorage.setItem('cosplay', true);
        }

        if (choice.dataset.image) {
            var newThread = $(`
                <div class='card'>
                    <img src="images/thread/${choice.dataset.image}" />
                </div>
            `).css('display', 'none').fadeIn(1000);
            $('#thread').prepend(newThread);
        }

        disableAllChoices();

        printChoice(choice);
        scrollContainer();

        await sleep(1500);

        if (choice.dataset.next) {
            if (choice.dataset.next == 34) {
                if (localStorage.getItem('simon') == "true") {
                    printResponse(chat[60]);
                } else if (localStorage.getItem('martin') == "true") {
                    printResponse(chat[70]);
                } else if (localStorage.getItem('dimas') == "true") {
                    printResponse(chat[80]);
                } else if (localStorage.getItem('dimas') == "false" && localStorage.getItem('cosplay') == "false") {
                    printResponse(chat[35]);
                } else {
                    printResponse(chat[34])
                }
            } else {
                printResponse(chat[choice.dataset.next]);
            }
            if (choice.dataset.next == 82) {
                if (localStorage.getItem('cosplay') == "true") {
                    printResponse(chat[90]);
                } else {
                    printResponse(chat[choice.dataset.next]);
                }
            }
        }
    };

    const init = function () {
        container.addEventListener('click', handleChoice);
        printResponse(chat[1]);
    };

    init();
}

bot();

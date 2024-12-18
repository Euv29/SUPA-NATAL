const presentes = [
    {
        nome: 'Apple Airpods 3th G.',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: OD Onlivendas & Okenio M',
        img: 'img/presentes/airpods.jpeg'
    },
    {
        nome: 'Bolo de Natal',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Idelicious',
        img: 'img/presentes/bolo.jpeg'
    },
    {
        nome: 'Nike Dunk Low',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Geo Store',
        img: 'img/presentes/dack.jpeg'
    },
    {
        nome: 'Dia de Spa',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'By: Txia Mi',
        img: 'img/presentes/spa.jpeg'
    },
    {
        nome: '10 Hambúrgueres',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Rochita Burguer',
        img: 'img/presentes/burger.jpeg'
    },
    {
        nome: '1 mês Netlix',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Xofela e Aires',
        img: 'img/presentes/netflix.jpeg'
    }, 
    {
        nome: '12GB Grátis',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Supinha',
        img: 'img/presentes/12g.jpeg'
    },
    {
        nome: 'Conjunto Feminino',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Zeana',
        img: 'img/presentes/conjunto.jpeg'
    },
    {
        nome: 'Jantar a 2 + Buquê',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: DaWeddy',
        img: 'img/presentes/encontro.jpeg'
    },
    {
        nome: 'Victoria’s Secret Kit',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Milly Care Store',
        img: 'img/presentes/kit.jpeg'
    },
    {
        nome: 'Sessão Fotográfica',
        dataInicio: new Date('2024-12-18T00:00:00+01:00'),
        dataFim: new Date('2024-12-18T23:59:59+01:00'),
        disponivel: false,
        descricao: 'by: Black Productions',
        img: 'img/presentes/foto.jpeg'
    },  
];

function verificarDisponibilidade() {
    const agora = new Date();

    presentes.forEach(presente => {
        const dataInicio = new Date(presente.dataInicio).getTime();
        const dataFim = new Date(presente.dataFim).getTime();
        const agoraTime = agora.getTime();

        if (agoraTime >= dataInicio && agoraTime <= dataFim) {
            presente.disponivel = true;
        } else {
            presente.disponivel = false;
        }
    });

    renderizarPresentes();
}

function renderizarPresentes() {
    const container = document.querySelector('.presente-group');
    container.innerHTML = ''; // Limpa os cards existentes

    presentes.forEach(presente => {
        const cardTemplate = document.createElement('section');
        cardTemplate.classList.add('present-closed', 'presente-card');

        const imgSection = document.createElement('section');
        imgSection.classList.add('img');
        const exclusivoDiv = document.createElement('div');
        exclusivoDiv.classList.add('text-sm', 'exclusivo');
        exclusivoDiv.textContent = 'EXCLUSIVO';
        imgSection.appendChild(exclusivoDiv);

        const infoSection = document.createElement('section');
        infoSection.classList.add('info');
        const titleSection = document.createElement('section');
        titleSection.classList.add('title');
        const descriptionSection = document.createElement('section');
        descriptionSection.classList.add('description');
        infoSection.appendChild(titleSection);
        infoSection.appendChild(descriptionSection);

        const btn = document.createElement('a');
        btn.href = '#';
        btn.classList.add('text-blue-500', 'underline', 'btn');

        if (presente.disponivel) {
            cardTemplate.classList.add('type-card-default');
            btn.textContent = 'RESERVAR';
            btn.id = 'reservar';
            titleSection.textContent = presente.nome;
            descriptionSection.textContent = presente.descricao;
            imgSection.style.backgroundImage = `url(${presente.img})`;
            imgSection.style.backgroundSize = 'cover';
            imgSection.style.backgroundPosition = 'center';
            imgSection.style.backgroundRepeat = 'no-repeat';
            imgSection.style.filter = 'none'; // Remove o filtro de escala de cinza
        } else {
            const agora = new Date();
            if (agora > presente.dataFim) {
                cardTemplate.classList.add('type-card-esgotado');
                btn.textContent = 'ESGOTADO';
                titleSection.textContent = presente.nome;
                descriptionSection.textContent = presente.descricao;
                imgSection.style.backgroundImage = `url(${presente.img})`;
                imgSection.style.backgroundSize = 'cover';
                imgSection.style.backgroundPosition = 'center';
                imgSection.style.backgroundRepeat = 'no-repeat';
            } else {
                cardTemplate.classList.add('type-card-indisponivel');
                btn.textContent = 'INDISPONÍVEL';
                const dataInicio = new Date(presente.dataInicio);
                const dia = String(dataInicio.getDate()).padStart(2, '0');
                const mes = String(dataInicio.getMonth() + 1).padStart(2, '0');
                titleSection.textContent = `EM BREVE - ${dia} / ${mes}`;
                const countdown = document.createElement('div');
                countdown.classList.add('countdown');
                descriptionSection.appendChild(countdown);
                updateCountdown(countdown, presente.dataInicio);

                // Adiciona a imagem do cadeado
                const lockImg = document.createElement('img');
                lockImg.src = 'img/icons/lock-closed.svg';
                lockImg.alt = 'Cadeado Fechado';
                imgSection.appendChild(lockImg);
            }
        }

        cardTemplate.appendChild(imgSection);
        cardTemplate.appendChild(infoSection);
        cardTemplate.appendChild(btn);

        container.appendChild(cardTemplate);
    });
}

function updateCountdown(element, targetDate) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        if (distance < 0) {
            clearInterval(interval);
            element.textContent = 'Disponível agora!';
            verificarDisponibilidade();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        element.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000);
}

// Verifica a disponibilidade a cada minuto
setInterval(verificarDisponibilidade, 60000);

// Verifica a disponibilidade imediatamente ao carregar a página
verificarDisponibilidade();
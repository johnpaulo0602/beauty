// declaração de constantes
const btnAgendar = document.querySelector('#btnAgendar');
const btnNext = document.querySelector('#btn-next');
const btnBack1 = document.querySelector('#btnBack1');
const btnBack2 = document.querySelector('#btnBack2');
const formGroup = document.querySelector('.form-group');
const confirmGroup = document.querySelector('.confirm-group');
const finalGroup = document.querySelector('.final-group');
const progressBall1 = document.querySelector('#progressBall1');
const progressBall2 = document.querySelector('#progressBall2');
const progressBall3 = document.querySelector('#progressBall3');
const progressBar = document.querySelector('#progress');
const listProcedimentosEl = document.querySelector('#listProcedimentos');
const dataAgendamentoEl = document.querySelector('#dataAgendamento');
const horaAgendamentoEl = document.querySelector('#horaAgendamento');
const procedimentoConfirmEl = document.querySelector('#procedimentoConfirm');
const diaConfirmEl = document.querySelector('#diaConfirm');
const horaConfirmEl = document.querySelector('#horaConfirm');

// mudar para a confirmação adicionando os valores que o usuário escolheu no input
function confirm1() {
  const listProcedimentos = listProcedimentosEl.value;
  // alterar formato da data capturada pelo navegador
  const dataAgendamento = dataAgendamentoEl.value.split('-').reverse().join('/');
  const horaAgendamento = horaAgendamentoEl.value;

  confirmGroup.style.display = 'block';
  formGroup.style.display = 'none';
  progressBall2.classList.add('progress-ball-active');
  progressBar.classList.add('progress-bar-active');
  progressBar.style.width = '50%';

  procedimentoConfirmEl.innerHTML = `Procedimento: ${listProcedimentos}`;
  diaConfirmEl.innerHTML = `Data: ${dataAgendamento}`;
  horaConfirmEl.innerHTML = `Hora: ${horaAgendamento}`;
}

// mudar para a finalização
function confirm2() {
  confirmGroup.style.display = 'none';
  formGroup.style.display = 'none';
  finalGroup.style.display = 'block';
  progressBall3.classList.add('progress-ball-active');
  progressBar.classList.add('progress-bar-active');
  progressBar.style.width = '100%';
}

// voltar para escolha de procedimento data hora
function back1()
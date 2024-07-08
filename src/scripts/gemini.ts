import './../styles/gemini.scss';
import { $ } from './dom';

document.addEventListener('DOMContentLoaded', async () => {
  // @ts-ignore
  const AI = window?.ai;

  if (!AI) {
    alert('This page requires the AI module to be loaded first. Please use Google Chrome Developer');
    return;
  }

  const canCreate = await AI.canCreateTextSession();
  if (canCreate === 'no') {
    alert('This page requires the AI module to be loaded first. Please use Google Chrome Developer');
  }

  const input = $('#input') as HTMLTextAreaElement;
  const output = $('#output') as HTMLTextAreaElement;
  const form = $('#form') as HTMLFormElement;

  const defaults = await AI.defaultTextSessionOptions();
  const session = await AI.createTextSession({
    temperature: 0.6,
    topK: defaults.topK,
  });
  console.log(session);

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log(input.value);
    const response = await session.prompt(input.value);
    input.value = '';
    input.focus();
    console.log(response);
    output.value = response;
  });
});

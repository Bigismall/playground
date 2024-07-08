import { $ } from '../src/scripts/dom';

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
  const submit = $('#submit') as HTMLButtonElement;

  const defaults = await AI.defaultTextSessionOptions();
  const session = await AI.createTextSession({
    temperature: 0.5,
    topK: defaults.topK,
  });

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    submit.disabled = true;
    const response = await session.promptStreaming(input.value);

    for await (const chunk of response) {
      output.value = chunk;
    }

    submit.disabled = false;
    input.focus();
  });
});

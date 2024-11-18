const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    butInstall?.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) return;

    try {
        promptEvent.prompt();

        const result = await promptEvent.userChoice;
        console.log('User response to install prompt:', result);

        window.deferredPrompt = null;
    } catch (error) {
        console.error('Failed to prompt install', error);
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed successfully!', event);

    window.deferredPrompt = null;
    butInstall?.classList.toggle('hidden', true);
});
